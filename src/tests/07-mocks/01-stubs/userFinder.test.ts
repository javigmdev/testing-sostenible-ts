import {
  User,
  UserFinder,
  UserRepository,
} from '../../../core/07-mocks/userFinder';

class RepositoryStub implements UserRepository {
  constructor(
    private stubListOfUsersByName: User[],
    private stubListOfUsersBySurname: User[],
  ) {}

  findUsersByName(name: string): User[] {
    return this.stubListOfUsersByName;
  }

  findUsersBySurname(surname: string): User[] {
    return this.stubListOfUsersBySurname;
  }
}

describe('The User Finder', () => {
  it('searches user by name first', () => {
    const aName = 'irrelevant-name';
    const aUser = new User(aName, '');
    const repository = new RepositoryStub([aUser], []);
    const usersFinder = new UserFinder(repository);

    const result = usersFinder.findUsers(aName);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(aUser);
  });

  it('searches user by surname when nothing is found by name', () => {
    const aSurname = 'irrelevant-name';
    const aUser = new User('', aSurname);
    const repository = new RepositoryStub([], [aUser]);
    const usersFinder = new UserFinder(repository);

    const result = usersFinder.findUsers(aSurname);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(aUser);
  });
});
