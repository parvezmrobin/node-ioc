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
    protected userService: UserService,
    @inject(Router) public router: Router,
  ) {
    this.router.get('/:id', this.get.bind(this));
  }

  get(req: Request, res: Response) {
    const user = this.userService.get(Number(req.params.id))
    res.json(user);
  }
}
