import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Schema as Schem } from 'mongoose';

export type UserDocument = GetUsers & Document;

@Schema()
export class GetUsers {
  @Prop()
  _id: Schem.Types.ObjectId;
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(GetUsers);
