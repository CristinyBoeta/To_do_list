import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DetalheBoleto } from './entities/detalhe-boleto.entity';
import { UpdateDetalheBoletoDto } from './dto/update/update-detalhe-boleto.dto';
import { CreateDetalheBoletoDto } from './dto/create/create-detalhe-boleto.dto';
import { CreatePaymentsDto } from './dto/create/create-payments.dto';

@Injectable()
export class DetalheBoletoService {
    constructor(@InjectModel(DetalheBoleto.name) private detalheBoletoModel: Model<DetalheBoleto>) { }

    async create(createDetalheBoletoDto: CreateDetalheBoletoDto) {
        const novoDetalheBoleto = new this.detalheBoletoModel(createDetalheBoletoDto);
        await novoDetalheBoleto.save();
        return novoDetalheBoleto;
    }

    async findAll() {
        const results = await this.detalheBoletoModel.find().exec();
        const result: DetalheBoleto[] = results;
        return result;
    }

    // findOne(id: number) {
    //     return `This action returns a #${id} produto`;
    // }

    async update(authenticationCode: string, udpatePayments: UpdateDetalheBoletoDto) {
        const boleto = await this.detalheBoletoModel
        .findOneAndUpdate({authenticationCode}, udpatePayments)
        .setOptions({ overwrite : true, new : true})
        .populate('payments');
        if (!boleto){
            throw new NotFoundException();
        }
        return boleto;
    }

    // async update(authenticationCode: string, udpatePayments: Payments) : Promise<Payments> {
    //     return await this.detalheBoletoModel.findByAuthenticationCode(authenticationCode, Payments,{
    //         new: true,
    //     });
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} produto`;
    // }
    // async getAllBoletos() {
    //     const results = await this.detalheBoletoModel.find().exec();
    //     const result: DetalheBoleto[] = results;
    //     return result;
    // }

    // async createDetalheBoleto(boletoInputData: CreateDetalheBoletoDto) {
    //     const novoDetalheBoleto = new this.detalheBoletoModel(boletoInputData);
    //     await novoDetalheBoleto.save();
    //     return novoDetalheBoleto;
    // }
}
