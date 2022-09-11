import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Users, UserDocument } from './schemas/user.schema';
import { GetUsers } from './schemas/getUser.schema';
import { CreateUserDto } from './dto/create-user.dto';
// const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  // constructor() {} // @InjectModel(Users.name) private userModel: Model<UserDocument>,

  // async created(CreateUserDto: CreateUserDto): Promise<Users> {
  //   const encryptedPass = await this.encryptedPassword(CreateUserDto.password);
  //   CreateUserDto.password = encryptedPass;
  //   this.userModel.init();
  //   const createdUser = new this.userModel(CreateUserDto);
  //   return createdUser.save();
  // }

  async findAll(): Promise<any> {
    return [
      {
        id: 1,
        username: 'ok',
        password: 'ok',
      },
    ];
  }

  // async findAll(): Promise<GetUsers[]> {
  //   return this.userModel.find().exec();
  // }

  // async findOne(id: string): Promise<GetUsers> {
  //   return this.userModel.findById(id).exec();
  // }

  // async findName(username: string): Promise<GetUsers> {
  //   return this.userModel.findOne({ username: username }).exec();
  // }

  // async comparePassword(password: string, hash: string): Promise<boolean> {
  //   try {
  //     const check: boolean = await bcrypt.compare(password, hash);
  //     return check;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // async encryptedPassword(password: string): Promise<string> {
  //   try {
  //     const hash: string = await bcrypt.hash(password, 12);
  //     return hash;
  //   } catch (error) {
  //     return error;
  //   }
  // }
}
