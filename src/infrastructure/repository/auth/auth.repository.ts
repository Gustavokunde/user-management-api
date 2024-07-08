import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcrypt';
import { User } from 'src/domain/entities/user/user.entity';
import { AuthRepository as DomainAuthRepository } from 'src/domain/repositories/auth.interface';
import { Repository } from 'typeorm';

@Injectable()
export class AuthRepository implements DomainAuthRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<{ token: string }> {
    const user = await this.userRepository.findOne({
      where: { username },
      select: {
        password: true,
        id: true,
        role: true,
      },
    });

    const passwordMatch = compareSync(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      role: user.role,
    };

    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}
