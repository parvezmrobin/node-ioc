/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import 'reflect-metadata';
import * as fs from 'fs';
import { Container, interfaces } from 'inversify';
import * as path from 'path';

let rootContainer: interfaces.Container = new Container();

const modules = fs.readdirSync(__dirname);

for (const moduleDir of modules) {
  const moduleContainer = require(path.join(moduleDir, 'module')) as Container;

  rootContainer = Container.merge(rootContainer, moduleContainer);
}

export default rootContainer;
