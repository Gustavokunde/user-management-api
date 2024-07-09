import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/domain/entities/user/user.entity';
import { AuthGuard } from 'src/infrastructure/guards/auth.guard';
import { Roles } from 'src/infrastructure/guards/roles.guard';
import { DatabaseUserRepository } from 'src/infrastructure/repository/user/user.repository';
@Controller('users')
export class UserController {
  constructor(private readonly userRepository: DatabaseUserRepository) {}

  @Post()
  async create(@Res() response: Response, @Body() createUserDto: User) {
    try {
      const user = await this.userRepository.create(createUserDto);
      return response.status(201).json(user);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  @UseGuards(AuthGuard)
  @Roles(['admin'])
  @Get()
  async findAll(@Res() response: Response) {
    try {
      const users = await this.userRepository.findAll();
      return response.status(200).json(users);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userRepository.findOne(id);
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      return response.status(200).json(await this.userRepository.remove(id));
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
