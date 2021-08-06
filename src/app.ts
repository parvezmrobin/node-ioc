import 'reflect-metadata';
import * as e from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import rootContainer from './container';
import CoreRouter from './router';

const coreRouter = rootContainer.get(CoreRouter);

const app = e();

app.use(logger('dev'));
app.use(e.json());
app.use(e.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(e.static(path.join(__dirname, 'public')));

app.use('/', coreRouter.router);

// noinspection JSUnusedLocalSymbols
app.use((err: unknown, req: e.Request, res: e.Response, next: e.NextFunction) => {
  console.error(err);
});

export default app;
