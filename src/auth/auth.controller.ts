import { Controller, Request, Response, Get, Post, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBody } from '@nestjs/swagger'
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserDto } from 'src/users/dto/user.dto';

@Controller('auth')
@ApiTags('AUTH')
export class AuthController {
    
    @ApiOperation({description: 'Conferência de token'})
    @ApiResponse({ 
        status: HttpStatus.OK, 
        description: 'Autenticação confirmada',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Token inexistente ou inválido'
    })
    @UseGuards(JwtAuthGuard)
    @Get()
    authorize(@Request() req: any) {
        return req.user;
    }
    
    @ApiOperation({description: 'Sistema de login'})
    @HttpCode(200)
    @ApiResponse({ 
        status: HttpStatus.OK, 
        description: 'Login realizado com sucesso',
    })
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer token',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Usuário não encontrado ou senha incorreta'
    })
    @ApiBody({ type: UserDto})
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req: any, @Response() res: any) {
        res.header({'Authorization': 'Bearer ' + req.user.token}).send();
    }
}