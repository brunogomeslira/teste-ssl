import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { ProfileModule } from './profile/profile.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProfileModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/admin'),
  ],
})
export class AppModule {}
