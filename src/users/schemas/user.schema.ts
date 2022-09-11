import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Schema as Schem } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
