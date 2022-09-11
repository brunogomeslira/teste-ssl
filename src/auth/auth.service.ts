import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  // async validateUser(username: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findName(username);
  //   if (
  //     user &&
  //     (await this.usersService.comparePassword(pass, user.password))
  //   ) {
  //     const { username, _id } = user;
  //     return { username, _id };
  //   }
  //   return null;
  // }

  // async login(user: any) {
  //   const getUser = await this.validateUser(user.username, user.userId);
  //   const payload = { username: getUser.username, sub: getUser._id };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
