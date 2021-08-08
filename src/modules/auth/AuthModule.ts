/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 08, 2021
 */
import Module from '../Module';
import AuthMiddleware from './AuthMiddleware';

const authModule = new Module({
  providers: [AuthMiddleware],
  exports: [AuthMiddleware],
});

export default authModule;
