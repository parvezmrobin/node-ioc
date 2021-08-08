/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { injectable } from 'inversify';
import { User } from './types';
import UserRepository from './UserRepository';

@injectable()
class UserService {
  constructor(protected userRepository: UserRepository) {}

  get(id: number): User | undefined {
    return this.userRepository.get(id);
  }

  findByName(name: string): User | undefined {
    return this.userRepository.findByName(name);
  }
}

export default UserService;
