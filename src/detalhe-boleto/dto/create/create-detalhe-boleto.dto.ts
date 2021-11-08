import { CreatePaymentsDto } from './create-payments.dto';
import { CreateAccountDto } from './create-account.dto';
import { CreateAmountDto } from './create-amount.dto';
import { CreatePayerDto } from './create-payer.dto';
import { CreateRecipientFinalDto } from './create-recipient-final.dto';
import { CreateRecipientOriginDto } from './create-recipient-origin.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsObject, IsString} from 'class-validator';

export class CreateDetalheBoletoDto {

    @ApiProperty({ description: 'Tipo de documento usado no registro do pagador', example: "8906580f-76bb-4e85-a0fd-ce1906202069" })
    @IsString()
    authenticationCode?: string;

    @ApiProperty({ description: 'Tipo de documento usado no registro do pagador', example: "2021-09-24T13:34:04.591+00:00" })
    @IsString()
    updatedAt?: string;

    @ApiProperty({ description: 'Tipo de documento usado no registro do pagador', example: "07644459129" })
    @IsString()
    ourNumber?: string;

    @ApiProperty({ description: 'Tipo de documento usado no registro do pagador', example: "33290001151076444591129001771210787590000050016" })
    @IsString()
    digitable?: string;

    @ApiProperty({ description: 'Tipo de documento usado no registro do pagador', example: "Registered" })
    @IsString()
    status?: string;

    @ApiProperty()
    @IsObject()
    account: CreateAccountDto;

    @ApiProperty()
    @IsString()
    document: string;

    @ApiProperty()
    @IsObject()
    amount: CreateAmountDto;

    @ApiProperty()
    @IsString()
    dueDate: string;

    @ApiProperty()
    @IsString()
    emissionDate: string;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsObject()
    payer: CreatePayerDto;

    @ApiProperty()
    @IsObject()
    recipientFinal: CreateRecipientFinalDto;

    @ApiProperty()
    @IsObject()
    recipientOrigin: CreateRecipientOriginDto;

    @ApiProperty()
    @IsArray()
    payments: [CreatePaymentsDto];
}