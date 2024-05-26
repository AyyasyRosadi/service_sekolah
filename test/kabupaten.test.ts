import app from '../src/server'
import request from 'supertest'

describe('kabupaten', () => {
    it('get kabupaten test', async() => {
        const response = await request(app).get('/kabupaten?provinsi_id=9416')
        expect(response.status).toBe(200)
    });
});
