export enum UserRole {
  'ADMIN' = 'admin',
  'COMMON' = 'common',
}

export class User {
  constructor() {
    this.isActive = true;
  }
  id: string;
  name: string;
  password: string;
  isActive: boolean;
  role: UserRole;
}
