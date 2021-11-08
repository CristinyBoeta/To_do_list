import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';

export type PixDocument = Pix & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class Pix {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  type: string;
  
  @Prop()
  value: string;
  
  @Prop()
  city: string;
  
  @Prop()
  zipCode: string;
  
  @Prop()
  amount: number;
  
  @Prop()
  recipientName: string;
  
  @Prop()
  conciliationId: string;
  
  @Prop()
  categoryCode: string;
  
  @Prop()
  additionalData: string;
  
  @Prop()
  encodedValue: string;
}

const PixSchema = SchemaFactory.createForClass(Pix);

export { PixSchema };