import 'reflect-metadata';
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import rootContainer from './container';
import CoreRouter from './router';

const coreRouter = rootContainer.get(CoreRouter);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', coreRouter.router);

export default app;
