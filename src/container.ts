/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { Router } from 'express';
import { Container, interfaces } from 'inversify';
import CoreRouter from './router';
import userModule from './modules/user/module';

const rootContainer: interfaces.Container = new Container({
  defaultScope: 'Singleton',
});

rootContainer.bind(Router).toFactory(() => Router());
rootContainer.bind(CoreRouter).to(CoreRouter).inTransientScope();

const containerModules = [userModule];

for (const containerModule of containerModules) {
  rootContainer.load(containerModule);
}

export default rootContainer;
