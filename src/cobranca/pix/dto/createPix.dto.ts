import { IsString, IsNumber } from 'class-validator';
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreatePixDto {

    @ApiProperty({ description: 'Tipo de documento usado no registro do pagador', example: 'CPF' })
    @Field(() => String)
    @IsString()
    type: string;
    
    @ApiProperty({ description: 'Documento usado no registro do pagador', example: '00011122233' })
    @Field(() => String)
    @IsString()
    value: string;
    
    @ApiProperty({ description: 'Cidade de domicílio do pagador', example: 'Cuiabá' })
    @Field(() => String)
    @IsString()
    city: string;
    
    @ApiProperty({ description: 'CEP do domicílio do pagador', example: '78005906' })
    @Field(() => String)
    @IsString()
    zipCode: string;
    
    @ApiProperty({ description: 'Valor do pix, casas decimais são separadas por ponto', example: '55.20' })
    @Field(() => Number)
    @IsNumber()
    amount: number;
    
    @ApiProperty({ description: 'Nome do recebedor do pix', example: 'Rodrigo Martins' })
    @Field(() => String)
    @IsString()
    recipientName: string;
    
    @ApiProperty({ description: 'Número para conciliação bancária', example: '01234567890' })
    @Field(() => String)
    @IsString()
    conciliationId: string;
    
    @ApiProperty({ description: 'Código da categoria', example: '0000' })
    @Field(() => String)
    @IsString()
    categoryCode: string;
    
    @ApiProperty({ description: 'Informações adicionais', example: 'Referente a conta de luz' })
    @Field(() => String)
    @IsString()
    additionalData: string;
    
    @ApiProperty({ description: 'QRCode em base64'})
    @Field(() => String)
    @IsString()
    encodedValue: string;
}

export default CreatePixDto;
