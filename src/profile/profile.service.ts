import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  async getProfile(user: string) {
    return {
      bruno: `${user} lindo`,
    };
  }
}
