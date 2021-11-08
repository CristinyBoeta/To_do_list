import { Module } from '@nestjs/common';
import { DetalheBoletoService } from './detalhe-boleto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DetalheBoletoSchema } from './schemas/detalhe-boleto.schema';
import { DetalheBoleto } from './entities/detalhe-boleto.entity';
import { DetalheBoletoController } from './detalhe-boleto.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
      name: DetalheBoleto.name,
      schema: DetalheBoletoSchema
    }])
  ],
  providers: [DetalheBoletoService, DetalheBoletoController],
  controllers: [DetalheBoletoController]
})
export class DetalheBoletoModule {}
