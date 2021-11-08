import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import MongooseClassSerializerInterceptor from 'src/utils/mongooseClassSerializer.interceptor';
import { DetalheBoletoService } from './detalhe-boleto.service';
import { CreateDetalheBoletoDto } from './dto/create/create-detalhe-boleto.dto';
import { CreatePaymentsDto } from './dto/create/create-payments.dto';
import { UpdateDetalheBoletoDto } from './dto/update/update-detalhe-boleto.dto';
import { DetalheBoleto } from './entities/detalhe-boleto.entity';

@Controller()
@ApiTags('DETALHE-BOLETO')
@UseInterceptors(MongooseClassSerializerInterceptor(DetalheBoleto))
export class DetalheBoletoController {
  constructor(private detalheBoletoService: DetalheBoletoService) { }

  @ApiOperation({ description: 'Registro de cobranças pix' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Registro realizado com sucesso',
        type: CreateDetalheBoletoDto
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Dados incompletos ou fora do padrão',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Token inexistente ou inválido'
    })
    @ApiBody({ type: CreateDetalheBoletoDto })
    // @UseGuards(JwtAuthGuard)
  @Post('detalhe-boleto')
  async create(@Body() createDetalheBoletoDto: CreateDetalheBoletoDto) {
    return this.detalheBoletoService.create(createDetalheBoletoDto);
  }

  
  @Get('detalhe-boleto')
  findAll() {
    return this.detalheBoletoService.findAll();
  }

  // @Get(':id')
  // findOneBy(@Param('id') id: string) {
  //   return this.detalheBoletoService.findOne(+id);
  // }

  @Put(':authenticationCode')
  async update(@Param() { authenticationCode } : DetalheBoleto, @Body() udpatePayments: UpdateDetalheBoletoDto): Promise<DetalheBoleto> {
    return this.detalheBoletoService.update(authenticationCode, udpatePayments);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.detalheBoletoService.remove(+id);
  // }
}
