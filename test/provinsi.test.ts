import app from '../src/server'
import request from 'supertest'

describe('provinsi', () => {
    it('get provinsi test', async() => {
        const response = await request(app).get('/provinsi')
        expect(response.status).toBe(200)
    });
});
