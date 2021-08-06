/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import {
  inject,
  injectable,
} from 'inversify';
import { UserRepository } from './UserRepository';

@injectable()
export class UserService {
  constructor(
    @inject(UserRepository)
    protected userRepository: UserRepository,
  ) {
  }

  get(id: number) {
    return this.userRepository.get(id);
  }
}
