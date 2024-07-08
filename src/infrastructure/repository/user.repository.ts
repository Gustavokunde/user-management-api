import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/user/user.entity';
import { UserRepository } from 'src/domain/repositories/user.interface';
import { Repository } from 'typeorm';
import { User as UserDB } from '../../infrastructure/entities/user.entity';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly dataBaseUserRepository: Repository<User>,
  ) {}

  async create(createUserDto: User): Promise<User> {
    try {
      let user = new UserDB();
      user = Object.assign(user, {
        ...createUserDto,
        isActive: true,
      });
      await user.save();

      return user;
    } catch (err) {
      return err;
    }
  }
  async findAll(): Promise<User[]> {
    try {
      const users = await this.dataBaseUserRepository.find();
      return users;
    } catch (err) {
      return err;
    }
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
