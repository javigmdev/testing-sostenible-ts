import {
  User,
  UserRepository,
  UserService,
} from '../../../core/07-mocks/userFakeObjectService';

class InMemoryRepository implements UserRepository {
  private users: User[] = [];

  findUsersBy(name: string): User[] {
    return this.users.filter((u: User) => u.hasTheSameName(name));
  }

  add(user: User): void {
    this.users.push(user);
  }

  update(user: User): void {
    const index = this.users.findIndex((u: User) => u.isEquals(user));
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users[index] = user;
  }

  delete(user: User): void {
    this.users = this.users.filter((u: User) => !u.isEquals(user));
  }
}

describe('The User Service', () => {
  it('saves user throughout the repository', () => {
    const repository = new InMemoryRepository();
    const service = new UserService(repository);
    const user = new User('irrelevant-username', 'irrelevant-name');
    repository.add(user);

    service.updateName(user, 'updated-name');

    expect(repository.findUsersBy('updated-name').length).toBe(1);
  });
});
