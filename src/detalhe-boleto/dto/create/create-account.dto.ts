import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAccountDto {
  @ApiProperty()
  @IsString()
  number: string;

  @ApiProperty()
  @IsNumber()
  branch: number;
}
