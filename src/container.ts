/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import { Router } from 'express';
import { Container, interfaces } from 'inversify';
import CoreRouter from './router';
import userModule from './modules/user/module';

let rootContainer: interfaces.Container = new Container();

rootContainer.bind(Router).toFactory(() => Router());
rootContainer.bind(CoreRouter).to(CoreRouter);

const moduleContainers = [userModule];

for (const moduleContainer of moduleContainers) {
  rootContainer = Container.merge(moduleContainer, rootContainer);
}

rootContainer.options.defaultScope = 'Singleton';

export default rootContainer;
