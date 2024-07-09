import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { User } from 'src/domain/entities/user/user.entity';
import { UserRepository } from 'src/domain/repositories/user.interface';
import { Repository } from 'typeorm';
import { User as UserDB } from '../../entities/user.entity';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly dataBaseUserRepository: Repository<User>,
  ) {}

  async create(createUserDto: User): Promise<User> {
    console.log('creating user');
    const password = hashSync(createUserDto.password, 10);
    const existingUser = await this.dataBaseUserRepository.findOne({
      where: { username: createUserDto.username },
    });
    console.log(existingUser);

    if (existingUser) throw new BadRequestException('user already exists');
    let user = new UserDB();
    user = Object.assign(user, {
      ...createUserDto,
      password,
    });
    await user.save();
    delete user.password;
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.dataBaseUserRepository.find();
    return users;
  }
  async findOne(id: string): Promise<User> {
    return await this.dataBaseUserRepository.findOne({ where: { id } });
  }
  async update(id: string, updateUserDto: User): Promise<User> {
    return await this.dataBaseUserRepository.save({ id, ...updateUserDto });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    user.isActive = false;
    await this.dataBaseUserRepository.save(user);
  }
}
