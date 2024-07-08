import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import {
  User as UserDomainEntity,
  UserRole,
} from '../../domain/entities/user/user.entity';

@Entity('users')
export class User extends BaseEntity implements UserDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255, nullable: false })
  name: string;

  @Column('varchar', { nullable: false, select: false })
  password: string;

  @Column('boolean', { nullable: false, default: true })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.COMMON,
  })
  role: UserRole;
}
