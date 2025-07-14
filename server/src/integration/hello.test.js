const request = require('supertest');
const app = require('../app');

describe('Integration Tests', () => {
    it('should respond with a 200 status code', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.statusCode).toBe(200);
    });
});