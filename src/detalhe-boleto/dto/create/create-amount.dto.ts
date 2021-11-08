import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAmountDto {
    @ApiProperty()
    @IsString()
    currency: string;

    @ApiProperty()
    @IsNumber()
    value: number;
}
