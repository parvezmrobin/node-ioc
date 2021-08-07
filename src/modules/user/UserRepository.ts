/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { injectable } from 'inversify';

type User = { id: number; name: string };

const users: User[] = [
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

@injectable()
export default class UserRepository {
  get(id: number) {
    return users.find((user) => user.id === id);
  }

  save(doc: User) {
    return users.push(doc);
  }
}
