import { User, UserFinder } from '../../../core/07-mocks/userFinder';

describe('The User Finder', () => {
  it('searches user by name first', () => {
    const aName = 'irrelevant-name';
    const aUser = new User(aName, '');
    const repository = {
      findUsersByName: (name: string) => [aUser],
      findUsersBySurname: (surname: string) => [],
    };
    const usersFinder = new UserFinder(repository);

    const result = usersFinder.findUsers(aName);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(aUser);
  });

  it('searches user by surname when nothing is found by name', () => {
    const aSurname = 'irrelevant-name';
    const aUser = new User('', aSurname);
    const repository = {
      findUsersByName: (name: string) => [],
      findUsersBySurname: (surname: string) => [aUser],
    };
    const usersFinder = new UserFinder(repository);

    const result = usersFinder.findUsers(aSurname);

    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(aUser);
  });
});
