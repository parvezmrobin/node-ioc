/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 06, 2021
 */

import * as supertest from 'supertest';
import app from '../app';

const server = supertest(app);
describe('User E2E test', () => {
  it('should not login with invalid credentials', () => {
    return server.post('/auth/login').send({ name: 'John Doe' }).expect(404);
  });

  it('should login with valid credentials', () => {
    return server
      .post('/auth/login')
      .send({ name: 'Parvez' })
      .expect(200)
      .expect((res) => {
        return res.body.token && typeof res.body.token === 'string';
      });
  });

  it('should not get a user without auth token', () => {
    return server.get('/users/1').expect(401);
  });

  it('should not get a user with invalid token', () => {
    return server
      .get('/users/1')
      .set('Authorization', 'Bearer abc')
      .expect(401);
  });

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
