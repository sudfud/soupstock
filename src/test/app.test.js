const supertest = require('supertest');
const app = require('../app');

describe('Testing the /stock/{symbol} endpoint...', () => {
    test('GET request for IBM, returning a 200 status code.', async () => {
        const res = await supertest(app).get('/stock/IBM');
        expect(res.statusCode).toBe(200);
    });

    test('GET request for nonexistant symbol NULL, 400 status code expected.', async () => {
        const res = await supertest(app).get('/stock/NULL');
        expect(res.statusCode).toBe(400);
    });
});