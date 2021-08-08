/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { injectable } from 'inversify';

type User = { id: number; name: string };

@injectable()
export default class UserRepository {
  users: User[] = [
    {
      id: 1,
      name: 'Parvez',
    },
    {
      id: 2,
      name: 'Mahbub',
    },
    {
      id: 3,
      name: 'Robin',
    },
  ];

  get(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  save(doc: User): number {
    return this.users.push(doc);
  }

  findByName(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }
}
