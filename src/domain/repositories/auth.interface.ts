export interface AuthRepository {
  signIn(email: string, password: string): Promise<{ token: string }>;
}
