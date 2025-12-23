const request = require('supertest');

describe('E2E Test', () => {
  let server;

  beforeAll(() => {
    server = require('../../src/app').listen(3001);
  });

  afterAll(() => {
    server.close();
  });

  it('should work end-to-end', async () => {
    const res = await request('http://localhost:3001').get('/sum?a=5&b=5');
    expect(res.body.result).toBe(10);
  });
});
