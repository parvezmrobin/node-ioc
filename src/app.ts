import 'reflect-metadata';
import * as e from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as logger from 'morgan';
import container from './container';
import './router';

const expressServer = new InversifyExpressServer(container);
expressServer.setConfig((app) => {
  app.use(logger('dev'));
  app.use(e.json());
  app.use(e.urlencoded({ extended: false }));
});

export default expressServer.build();
