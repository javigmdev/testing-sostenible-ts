export class User {
  constructor(private username: string, private password: string) {}

  updatePassword(password: string) {
    this.password = password;
  }
}
export interface UserRepository {
  save(user: User): void;
}

export class UserService {
  constructor(private repository: UserRepository) {}

  updatePassword(user: User, password: string) {
    user.updatePassword(password);
    this.repository.save(user);
  }
}
