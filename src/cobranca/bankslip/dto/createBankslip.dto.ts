import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateBankslipDto {

  @ApiProperty({ description: 'Número para conciliação bancária', example: '01234567890' })
  @Field(() => String)
  @IsString()
  alias: string;
  
  @ApiProperty({ description: 'Conta do beneficiário', example: '012345' })
  @Field(() => String)
  @IsString()
  number: string;
  
  @ApiProperty({ description: 'Branch da conta', example: '0001' })
  @Field(() => String)
  @IsString()
  branch: string;
  
  @ApiProperty({ description: 'Documento do beneficiário (apenas números)', example: '01234567000123' })
  @Field(() => String)
  @IsString()
  documentNumber: string;
  
  @ApiProperty({ description: 'Valor do boleto, casas decimais são separadas por ponto', example: '55.20' })
  @Field(() => Number)
  @IsNumber()
  amount: number;
  
  @ApiProperty({ description: 'Data de vencimento do boleto', example: '2021-11-30' })
  @Field(() => String)
  @IsString()
  dueDate: string;
  
  @ApiProperty({ description: 'Taxas de emissão do boleto, casas decimais são separadas por ponto', example: '1.30' })
  @Field(() => Boolean)
  @IsBoolean()
  emissionFee: boolean;
  
  @ApiProperty({ description: 'Tipo de boleto', example: 'Levy' })
  @Field(() => String)
  @IsString()
  type: string;
  
  @ApiProperty({ description: 'Documento do pagador (apenas números)', example: '00011122233' })
  @Field(() => String)
  @IsString()
  document: string;
  
  @ApiProperty({ description: 'Nome do pagador', example: 'João da Silva' })
  @Field(() => String)
  @IsString()
  name: string;
  
  @ApiProperty({ description: 'Nome fantasia do pagador', example: 'João da Silva' })
  @Field(() => String)
  @IsString()
  tradeName: string;
  
  @ApiProperty({ description: 'Endereço do pagador', example: 'Rua Nova, 123' })
  @Field(() => String)
  @IsString()
  addressLine: string;
  
  @ApiProperty({ description: 'Cidade do pagador', example: 'Cuiabá' })
  @Field(() => String)
  @IsString()
  city: string;
  
  @ApiProperty({ description: 'Estado do pagador', example: 'MT' })
  @Field(() => String)
  @IsString()
  state: string;
  
  @ApiProperty({ description: 'CEP do pagador', example: '78000000' })
  @Field(() => String)
  @IsString()
  zipCode: string;
  
  @ApiProperty({ description: 'Código de registro do boleto' })
  @Field(() => String)
  @IsString()
  authCode: string;
  
  @ApiProperty({ description: 'Linha digitável (código de barras)' })
  @Field(() => String)
  @IsString()
  digitable: string;

  // @ApiProperty({ description: 'Situação do boleto' })
  // @Field(() => Boolean)
  // @IsBoolean()
  // statusCancelamento: boolean;

  // StatusPagamento: 
}

export default CreateBankslipDto;
