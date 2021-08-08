/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 08, 2021
 */

import {
  BaseHttpController,
  controller,
  httpPost,
  requestBody,
  results,
} from 'inversify-express-utils';
import { sign as jwtSign } from 'jsonwebtoken';
import * as appConfig from '../../config/app.json';
import UserService from '../user/UserService';

@controller('/auth')
export default class AuthController extends BaseHttpController {
  constructor(protected userService: UserService) {
    super();
  }

  @httpPost('/login')
  login(
    @requestBody() body: Record<string, string>,
  ): results.JsonResult | results.NotFoundResult {
    const user = this.userService.findByName(body.name);
    if (!user) {
      return this.notFound();
    }

    const token = jwtSign(user, appConfig.secret);

    return this.json({ token });
  }
}
