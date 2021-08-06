/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import * as supertest from 'supertest';
import app from '../app';

describe('User E2E test', function () {
  it('should get a user', function () {
    return supertest(app).get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ name: 'Parvez M Robin' });
  });
});
