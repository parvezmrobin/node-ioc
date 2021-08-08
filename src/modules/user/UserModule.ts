/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import Module from '../Module';
import UserController from './UserController';
import UserRepository from './UserRepository';
import UserService from './UserService';

const userModule = new Module({
  providers: [UserController, UserService, UserRepository],
  exports: [UserService],
});

export default userModule;
