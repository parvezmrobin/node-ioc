import {
  BaseHttpController,
  controller,
  httpGet,
} from 'inversify-express-utils';
import './modules/auth/AuthController';
import './modules/user/UserController';

@controller('/')
export default class CoreRouter extends BaseHttpController {
  @httpGet('/')
  get(): void {
    this.json({ message: 'This is a IoC container test' });
  }
}
