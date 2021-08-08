import {
  BaseHttpController,
  controller,
  httpGet,
  requestParam,
  results,
} from 'inversify-express-utils';
import AuthMiddleware from '../auth/AuthMiddleware';
import UserService from './UserService';

@controller('/users', AuthMiddleware)
export default class UserController extends BaseHttpController {
  constructor(protected userService: UserService) {
    super();
  }

  @httpGet('/:id')
  get(@requestParam('id') id: string): results.JsonResult {
    const user = this.userService.get(Number(id));
    return this.json(user);
  }
}
