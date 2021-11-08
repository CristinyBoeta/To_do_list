import { Controller, Request, Post, UseGuards, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('user')
@ApiTags('USER')
export class UserController {
    constructor(
        private userService: UsersService,
    ) { }

    @ApiOperation({description: 'Cadastro de usuários'})
    @ApiResponse({ 
        status: HttpStatus.CREATED, 
        description: 'Usuário cadastrado com sucesso',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: 'Dados incompletos ou fora do padrão',
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: 'Token inexistente ou inválido'
    })
    @ApiBody({ type: UserDto})
    // @UseGuards(JwtAuthGuard)
    @Post('register')
    async register(@Request() req: any) {
        return this.userService.register(req.body);
    }
}