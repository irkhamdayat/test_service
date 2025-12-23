const request = require('supertest');
const app = require('../../src/app');

describe('Unit Test - Sum API', () => {
  it('should return sum correctly', async () => {
    const res = await request(app).get('/sum?a=2&b=3');
    expect(res.body.result).toBe(5);
  });
});
