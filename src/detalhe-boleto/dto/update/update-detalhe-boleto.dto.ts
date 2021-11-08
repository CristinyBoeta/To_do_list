import { PartialType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from "class-validator";
import { CreateDetalheBoletoDto } from "../create/create-detalhe-boleto.dto";
import { UpdatePaymentsDto } from "./update-payments.dto";

export class UpdateDetalheBoletoDto {
    @ApiProperty()
    @IsArray()
    payments: [UpdatePaymentsDto];
}
