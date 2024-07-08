import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/domain/entities/user/user.entity';
import { AuthGuard } from 'src/domain/guards/auth.guard';
import { Roles, RolesGuard } from 'src/domain/guards/roles.guard';
import { DatabaseUserRepository } from 'src/infrastructure/repository/user/user.repository';
@UseGuards(RolesGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userRepository: DatabaseUserRepository) {}

  @Post()
  async create(@Res() response: Response, @Body() createUserDto: User) {
    try {
      const user = await this.userRepository.create(createUserDto);
      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json(JSON.stringify(err));
    }
  }

  @UseGuards(AuthGuard)
  @Roles(['admin'])
  @Get()
  async findAll(@Res() response: Response) {
    const users = await this.userRepository.findAll();
    return response.status(200).json(users);
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
