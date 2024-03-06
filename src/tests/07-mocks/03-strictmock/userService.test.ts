import {
  User,
  UserRepository,
  UserService,
} from '../../../core/07-mocks/userService';

class RepositoryMock implements UserRepository {
  called = 0;
  save(user: User): void {
    this.called++;
  }

  verify() {
    if (this.called > 1) {
      throw new Error('Saved method was called more than once');
    }
  }
}

describe('The User Service', () => {
  it('saves user throught the repository', () => {
    const repository = new RepositoryMock();
    const service = new UserService(repository);
    const user = new User('irrelevant-name', 'irrelevant-password');

    service.updatePassword(user, '1234');

    repository.verify();
  });
});
