import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';
import { CreateAddressDto } from './create-address.dto';

export class CreateRecipientOriginDto {
    @ApiProperty()
    @IsString()
    document: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    tradeName: string;

    @ApiProperty()
    @IsObject()
    address: CreateAddressDto;
}
