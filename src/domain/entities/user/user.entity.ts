export class User {
  constructor() {
    this.isActive = true;
  }
  id: string;
  name: string;
  password?: string;
  isActive: boolean;
}
