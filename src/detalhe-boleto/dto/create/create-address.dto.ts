import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAddressDto {
    @ApiProperty()
    @IsString()
    addressLine: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    state: string;

    @ApiProperty()
    @IsString()
    zipCode: string;
}
