/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { Router } from 'express';
import { Container, interfaces } from 'inversify';
import authModule from './modules/auth/AuthModule';
import userModule from './modules/user/UserModule';
import CoreRouter from './router';

const container: interfaces.Container = new Container({
  defaultScope: 'Singleton',
});

container.bind(Router).toFactory(() => Router());
container.bind(CoreRouter).to(CoreRouter).inTransientScope();

const containerModules = [userModule, authModule];

for (const containerModule of containerModules) {
  container.load(containerModule);
}

export default container;
