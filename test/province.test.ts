import app from '../src/server'
import request from 'supertest'

describe('province', () => {
    it('get_province_test', async() => {
        const response = await request(app).get('/province')
        expect(response.status).toBe(200)
    });
});
