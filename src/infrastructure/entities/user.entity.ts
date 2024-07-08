import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User as UserDomainEntity } from '../../domain/entities/user/user.entity';

@Entity('users')
export class User extends BaseEntity implements UserDomainEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255, nullable: true })
  name: string;

  @Column('varchar', { nullable: true })
  password?: string;

  @Column('boolean', { nullable: false })
  isActive: boolean;
}
