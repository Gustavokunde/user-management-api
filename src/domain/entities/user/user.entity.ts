import { Role } from '../role/role.entity';

export class User {
  constructor() {
    this.isActive = true;
  }
  id?: string;
  name: string;
  password: string;
  role: Role;
  isActive: boolean;
}
