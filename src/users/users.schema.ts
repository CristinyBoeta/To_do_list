import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';

export type UserDocument = User & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User {
    @Transform(({ value }) => value.toString())
    _id: ObjectId;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true})
    password: string;

    @Prop()
    token: string;

    @Prop()
    tokenExpires: Date;
}
const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };