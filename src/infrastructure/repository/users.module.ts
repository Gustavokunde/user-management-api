import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user/user.controller';
import { User } from '../entities/user.entities';
import { DatabaseUserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [DatabaseUserRepository],
})
export class UsersModule {}
