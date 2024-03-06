export class User {
  constructor(private readonly username: string, private name: string) {}

  updateName(name: string) {
    this.name = name;
  }

  hasTheSameName(name: string) {
    return this.name == name;
  }

  isEquals(user: User) {
    return this.username === user.username;
  }
}

export interface UserRepository {
  add(user: User): void;
  update(user: User): void;
  delete(user: User): void;
  findUsersBy(name: string): User[];
}

export class UserService {
  constructor(private repository: UserRepository) {}

  updateName(user: User, name: string) {
    user.updateName(name);
    this.repository.update(user);
  }
}
