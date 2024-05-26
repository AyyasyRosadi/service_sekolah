import app from '../src/server'
import request from 'supertest'

describe('regency', () => {
    it('get_regency_test', async () => {
        const response = await request(app).get('/regency?province_id=9416')
        expect(response.status).toBe(200)
    });
});
