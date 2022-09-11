import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { Users, UserSchema } from './schemas/user.schema';
import { AppController } from './user.controller';
@Module({
  // imports: [
  //   MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  // ],
  controllers: [AppController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
