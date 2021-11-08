import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import CobrancaService from './cobranca.service';
import { CreateBankslipDto } from './bankslip/dto/createBankslip.dto';
import { CreatePixDto } from './pix/dto/createPix.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver()
export class CobrancaResolver {
  
  constructor(
    private readonly cobrancaService: CobrancaService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  createBankslip(@Args({ name: 'createBankslipDto', type: () => CreateBankslipDto}) createBankslipDto : CreateBankslipDto) : Promise<any>{
    //return JSON.stringify(this.cobrancaService.createBankslip(createBankslipDto));
    return this.cobrancaService.createBankslip(createBankslipDto);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  createPix(@Args({ name: 'createPixDto', type: () => CreatePixDto}) createPixDto : CreatePixDto) : Promise<any>{
    //return JSON.stringify(this.cobrancaService.createPix(createPixDto));
    return this.cobrancaService.createPix(createPixDto);
  }

}
