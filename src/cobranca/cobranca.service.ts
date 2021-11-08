import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankslipDocument, Bankslip } from './bankslip/schema/bankslip.schema';
import { PixDocument, Pix } from './pix/schema/pix.schema';
import CreateBankslipDto from './bankslip/dto/createBankslip.dto';
import CreatePixDto from './pix/dto/createPix.dto';
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
class CobrancaService {
  constructor(
    @InjectModel(Bankslip.name) private bankslipModel: Model<BankslipDocument>,
    @InjectModel(Pix.name) private pixModel: Model<PixDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async createBankslip(bankslipData: CreateBankslipDto) : Promise<any> {
    const createdBankslip = new this.bankslipModel(bankslipData);
    return await createdBankslip.save();
  }

  async createPix(pixData: CreatePixDto) : Promise<any> {
    const createdPix = new this.pixModel(pixData);
    return await createdPix.save();
  }
}

export default CobrancaService;
