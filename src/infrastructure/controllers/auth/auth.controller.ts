import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthRepository as DataBaseAuthRepository } from '../../repository/auth/auth.repository';

@Controller('auth')
export class AuthController {
  constructor(private readonly authRepository: DataBaseAuthRepository) {}

  @Post()
  async signIn(
    @Body() body: { email: string; password: string },
    @Res() response: Response,
  ) {
    try {
      const result = await this.authRepository.signIn(
        body.email,
        body.password,
      );
      return response.status(200).json(result);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
