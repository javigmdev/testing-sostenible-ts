import {
  User,
  UserRepository,
  UserService,
} from '../../../core/07-mocks/userService';

class RepositorySpy implements UserRepository {
  public savedUser: User;

  save(user: User): void {
    this.savedUser = user;
  }
}

describe('The User Service', () => {
  it('saves user throughout the repository', () => {
    const repository = new RepositorySpy();
    const service = new UserService(repository);
    const user = new User('irrelevant-name', 'irrelevant-password');

    service.updatePassword(user, '1234');

    expect(repository.savedUser).toEqual(user);
  });
});
