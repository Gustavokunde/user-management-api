import { User } from '../entities/user/user.entity';

export interface UserRepository {
  create(createUserDto: User): Promise<User>;
  findAll(): Promise<Array<User>>;
  findOne(id: string): Promise<User>;
  update(id: string, updateUserDto: User): Promise<User>;
  remove(id: string): Promise<void>;
}
