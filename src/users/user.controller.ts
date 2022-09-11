import { Controller, Post, Get, Body, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('User')
@Controller('users')
export class AppController {
  constructor(private userService: UserService) {}

  // @Post('created')
  // async created(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.created(createUserDto);
  // }

  // @UseGuards(JwtAuthGuard)
  @Get('getAll')
  // @ApiBearerAuth('access-token')
  async getAll() {
    return this.userService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  // @Get()
  // @ApiBearerAuth('access-token')
  // async getOne(@Query('id') id: string) {
  //   return this.userService.findOne(id);
  // }
}
