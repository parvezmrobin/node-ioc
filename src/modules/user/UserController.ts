import {
  Request,
  Response,
  Router,
} from 'express';
import {
  inject,
  injectable,
} from 'inversify';
import { UserService } from './UserService';

@injectable()
export default class UserController {
  constructor(
    @inject(UserService) protected userService: UserService,
    @inject(Router) public router: Router,
  ) {
    this.router.get('/', this.get);
  }

  get(req: Request, res: Response) {
    res.json({ name: 'Parvez M Robin' });
  }
}
