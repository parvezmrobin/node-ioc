/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import * as supertest from 'supertest';
import app from '../app';

const server = supertest(app);
describe('User E2E test', () => {
  it('should get a user', async () => {
    const tokenResponse = await server
      .post('/auth/login')
      .send({ name: 'Parvez' })
      .expect(200);
    return server
      .get('/users/1')
      .set({ Authorization: `Bearer ${tokenResponse.body.token}` })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({ id: 1, name: 'Parvez' });
  });
});
