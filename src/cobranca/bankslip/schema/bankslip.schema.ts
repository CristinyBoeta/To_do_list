import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';

export type BankslipDocument = Bankslip & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class Bankslip {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  alias: string;
  
  @Prop()
  number: string;
  
  @Prop()
  branch: string;
  
  @Prop()
  documentNumber: string;
  
  @Prop()
  amount: number;
  
  @Prop()
  dueDate: string;
  
  @Prop()
  emissionFee: boolean;
  
  @Prop()
  type: string;
  
  @Prop()
  document: string;
  
  @Prop()
  name: string;
  
  @Prop()
  tradeName: string;
  
  @Prop()
  addressLine: string;
  
  @Prop()
  city: string;
  
  @Prop()
  state: string;
  
  @Prop()
  zipCode: string;  
  
  @Prop()
  authCode: string;  

  @Prop()
  digitable: string;  
}

const BankslipSchema = SchemaFactory.createForClass(Bankslip);

export { BankslipSchema };