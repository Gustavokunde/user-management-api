import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/domain/entities/user/user.entity';
import { DatabaseUserRepository } from 'src/infrastructure/repository/user.repository';

@Controller('users')
export class UserController {
  constructor(private readonly userRepository: DatabaseUserRepository) {}

  @Post()
  create(@Res() response: Response, @Body() createUserDto: User) {
    return response.status(201).json(this.userRepository.create(createUserDto));
  }

  @Get()
  findAll(@Res() response: Response) {
    return response.status(200).json(this.userRepository.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRepository.findOne(id);
  }

  @Patch(':id')
  update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateUserDto: User,
  ) {
    return response
      .status(200)
      .json(this.userRepository.update(id, updateUserDto));
  }

  @Delete(':id')
  remove(@Res() response: Response, @Param('id') id: string) {
    return response.status(200).json(this.userRepository.remove(id));
  }
}
