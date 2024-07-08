import { User } from 'src/domain/entities/user/user.entity';
import { UserRepository } from 'src/domain/repositories/user.interface';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: User) {
    return await this.userRepository.create(user);
  }
}
