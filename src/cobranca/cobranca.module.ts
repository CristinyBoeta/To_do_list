import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CobrancaResolver } from './cobranca.resolver';
import { BankslipSchema, Bankslip } from './bankslip/schema/bankslip.schema';
import { PixSchema, Pix } from './pix/schema/pix.schema';
import CobrancaService from './cobranca.service';
import { CobrancaController } from './cobranca.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bankslip.name, schema: BankslipSchema },
      { name: Pix.name, schema: PixSchema }
    ]),
  ],
  providers: [CobrancaService, CobrancaResolver],
  controllers: [CobrancaController],
  exports: [CobrancaService],
})
export class CobrancaModule {}
