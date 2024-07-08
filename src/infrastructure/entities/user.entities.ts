import { Role } from 'src/domain/entities/role/role.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { User as UserDomainEntity } from '../../domain/entities/user/user.entity';
@Entity()
export class User implements UserDomainEntity {
  @PrimaryColumn({ type: 'integer' })
  id: string;

  @Column('varchar', { length: 255, nullable: true })
  name: string;

  @Column('varchar', { nullable: false })
  password: string;

  @Column('varchar', { nullable: false })
  role: Role;

  @Column('boolean', { nullable: false })
  isActive: boolean;
}
