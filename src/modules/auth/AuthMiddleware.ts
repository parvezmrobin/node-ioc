/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 08, 2021
 */

import { NextFunction, Request, Response } from 'express';
import { BaseMiddleware } from 'inversify-express-utils';

export default class AuthMiddleware extends BaseMiddleware {
  handler(req: Request, res: Response, next: NextFunction): void {
    if (this.httpContext.user.details) {
      next();
    } else {
      res.sendStatus(401);
    }
  }
}
