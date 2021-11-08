import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class UpdatePaymentsDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsNumber()
    amount: number;

    @ApiProperty()
    @IsString()
    paymentChannel: string;

    @ApiProperty()
    @IsString()
    paidOutDate: string;

    @ApiProperty()
    @IsBoolean()
    statusCancelamento: boolean = false;

    @ApiProperty()
    @IsBoolean()
    statusPagamento: boolean = false;

    @ApiProperty()
    @IsDate()
    dataCancelamento: Date;

    @ApiProperty()
    @IsDate()
    dataPagamento: Date;
}