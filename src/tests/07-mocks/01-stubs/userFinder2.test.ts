import {
  User,
  UserFinder,
  UserRepository,
} from '../../../core/07-mocks/userFinder';

class Repository implements UserRepository {
  findUsersByName(name: string): User[] {
    return [];
  }

  findUsersBySurname(surname: string): User[] {
    return [];
  }
}

describe('The User Finder', () => {
  it('searches user by name first', () => {
    const aName = 'irrelevant-name';
    const aUser = new User(aName, '');
    const repository = new Repository();
    repository.findUsersByName = () => [aUser];
    const usersFinder = new UserFinder(repository);

    const result = usersFinder.findUsers(aName);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(aUser);
  });

  it('searches user by surname when nothing is found by name', () => {
    const aSurname = 'irrelevant-name';
    const aUser = new User('', aSurname);
    const repository = new Repository();
    repository.findUsersBySurname = () => [aUser];
    const usersFinder = new UserFinder(repository);

    const result = usersFinder.findUsers(aSurname);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(aUser);
  });
});
