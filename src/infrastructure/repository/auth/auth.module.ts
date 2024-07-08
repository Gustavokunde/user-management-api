import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import { AuthController } from 'src/infrastructure/controllers/auth/auth.controller';
import { User } from 'src/infrastructure/entities/user.entity';
import { AuthRepository } from './auth.repository';

configDotenv();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthRepository],
})
export class AuthModule {}
