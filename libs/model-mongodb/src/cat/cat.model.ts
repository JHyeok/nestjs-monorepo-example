import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'cat',
  timestamps: true,
  read: 'secondaryPreferred',
  versionKey: false,
})
export class CatModel {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export type CatDocument = CatModel & Document;
export const CatSchema = SchemaFactory.createForClass(CatModel);
