export class User {
  constructor(readonly name: string, readonly surname: string) {}
}

export interface UserRepository {
  findUsersByName: (name: string) => User[];
  findUsersBySurname: (surname: string) => User[];
}

export class UserFinder {
  constructor(private repository: UserRepository) {}

  findUsers(name: string): User[] {
    const usersByName = this.repository.findUsersByName(name);
    if (usersByName != null && usersByName.length > 0) {
      return usersByName;
    }
    const usersBySurname = this.repository.findUsersBySurname(name);
    if (usersBySurname != null && usersBySurname.length > 0) {
      return usersBySurname;
    }
    return [];
  }
}
