import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user/user.entity';
import { UserRepository } from 'src/domain/repositories/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly dataBaseUserRepository: Repository<User>,
  ) {}

  async create(createUserDto: User): Promise<User> {
    return this.dataBaseUserRepository.create(createUserDto);
  }
  findAll(): Promise<User[]> {
    return this.dataBaseUserRepository.find();
  }
  findOne(id: string): Promise<User> {
    return this.dataBaseUserRepository.findOne({ where: { id } });
  }
  update(id: string, updateUserDto: User): Promise<User> {
    return this.dataBaseUserRepository.save({ id, ...updateUserDto });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    user.isActive = false;
    await this.dataBaseUserRepository.save(user);
  }
}
