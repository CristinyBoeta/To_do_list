import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty({ description: 'Username', example: 'admin' })
    @IsNotEmpty()
    username: string;

    @ApiProperty({ description: 'Password', example: 'admin123' })
    @Length(8, 8)
    password: string;
}