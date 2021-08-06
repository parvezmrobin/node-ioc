/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { Container } from 'inversify';
import UserController from './UserController';
import { UserRepository } from './UserRepository';
import { UserService } from './UserService';

const userContainer = new Container();

userContainer.bind(UserRepository).to(UserRepository);
userContainer.bind(UserService).to(UserService);
userContainer.bind(UserController).to(UserController);

export default userContainer;
