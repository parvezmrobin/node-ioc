/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 08, 2021
 */

// eslint-disable-next-line max-classes-per-file
import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { JwtPayload } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { interfaces } from 'inversify-express-utils';
import { User } from '../user/types';
import * as appConfig from '../../config/app.json';
import UserService from '../user/UserService';

class Principal implements interfaces.Principal {
  constructor(public details: User | undefined) {}

  async isAuthenticated() {
    return !!this.details;
  }

  // eslint-disable-next-line class-methods-use-this
  async isResourceOwner() {
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  async isInRole() {
    return false;
  }
}

@injectable()
export default class AuthProvider implements interfaces.AuthProvider {
  @inject(UserService) protected userService: UserService | undefined;

  async getUser(req: Request): Promise<interfaces.Principal> {
    const authorizationHeader = req.header('Authorization');
    let user: User | undefined;

    if (authorizationHeader) {
      try {
        const token = authorizationHeader.substr('Bearer '.length);
        const decoded = jwt.verify(token, appConfig.secret) as JwtPayload;
        user = this.userService?.get(Number(decoded.id));
      } catch (e) {
        // ignore
      }
    }

    return new Principal(user);
  }
}
