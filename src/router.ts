import {
  Request,
  Response,
  Router,
} from 'express';
import {
  inject,
  injectable,
} from 'inversify';
import UserController from './modules/user/UserController';

@injectable()
export default class CoreRouter {
  constructor(
    @inject(UserController) protected userController: UserController,
    @inject(Router) public router: Router,
  ) {
    this.router.use('/users', this.userController.router);
    this.router.get('/', this.get);
  }

  get(req: Request, res: Response) {
    res.json({ message: 'This is a IoC container test.' });
  }
}
