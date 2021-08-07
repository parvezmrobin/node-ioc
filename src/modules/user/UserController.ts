import {
  BaseHttpController,
  controller,
  httpGet,
  requestParam,
} from 'inversify-express-utils';
import UserService from './UserService';

@controller('/users')
export default class UserController extends BaseHttpController {
  constructor(protected userService: UserService) {
    super();
  }

  @httpGet('/:id')
  get(@requestParam('id') id: string) {
    const user = this.userService.get(Number(id));
    return this.json(user);
  }
}
