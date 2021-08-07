/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { ContainerModule } from 'inversify';
import UserController from './UserController';
import UserRepository from './UserRepository';
import UserService from './UserService';

const userContainer = new ContainerModule((bind) => {
  bind(UserRepository).toSelf();
  bind(UserService).toSelf();
  bind(UserController).toSelf();
});

export default userContainer;
