import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import './modules/user/UserController';

@controller('/')
export default class CoreRouter {
  @httpGet('/')
  get(req: Request, res: Response) {
    res.json({ message: 'This is a IoC container test.' });
  }
}
