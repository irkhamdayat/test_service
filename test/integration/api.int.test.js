const request = require('supertest');
const app = require('../../src/app');

describe('Integration Test - Health API', () => {
  it('should return health status', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe('ok');
  });
});
