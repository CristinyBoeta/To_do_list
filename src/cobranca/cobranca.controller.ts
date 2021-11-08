import { Controller, Post, UseGuards, HttpStatus, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import CobrancaService from './cobranca.service';
import CreateBankslipDto from './bankslip/dto/createBankslip.dto';
import CreatePixDto from './pix/dto/createPix.dto';

@Controller()
@ApiTags('COBRANÇA')
export class CobrancaController {
    constructor(private cobrancaService: CobrancaService) { }

    @ApiOperation({ description: 'Registro de cobranças pix' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Registro realizado com sucesso',
        type: CreatePixDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Dados incompletos ou fora do padrão',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Token inexistente ou inválido'
    })
    @ApiBody({ type: CreatePixDto })
    @UseGuards(JwtAuthGuard)
    @Post('pix')
    async createPix(@Body() pixData: CreatePixDto) {
        return this.cobrancaService.createPix(pixData);
    }

    @ApiOperation({ description: 'Registro de cobranças boleto' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Registro realizado com sucesso',
        type: CreateBankslipDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Dados incompletos ou fora do padrão',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Token inexistente ou inválido'
    })
    @ApiBody({ type: CreateBankslipDto })
    // @UseGuards(JwtAuthGuard)
    @Post('bankslip')
    async createBankslip(@Body() bankslipData: CreateBankslipDto) {
        return this.cobrancaService.createBankslip(bankslipData);
    }


}