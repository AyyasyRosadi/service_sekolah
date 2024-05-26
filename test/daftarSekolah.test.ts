import app from '../src/server'
import request from 'supertest'

describe('daftarSekolah', () => {
    it('get daftar-sekolah test', async() => {
        const response = await request(app).get('/daftar-sekolah')
        expect(response.status).toBe(200)
    });
    it('add daftar-sekolah succes test',async()=>{
        const response = await request(app).post('/daftar-sekolah').send({
            category:"Negeri",
            name:"SMA 1 Jakarta",
            address:"Jln Cikung 17, Jakarta Pusat",
            postal_code:"12345",
            provinsi_id:"31",
            kabupaten_id:"3173",
            phone_number:"0871938114080",
            email:"example@gmail.com",
            facebook:"example",
            total_students:300
        })
        expect(response.status).toBe(200)
    })
    it('add daftar-sekolah err test',async()=>{
        const response = await request(app).post('/daftar-sekolah').send({
            category:"Negeri",
            name:"SMA 1 Jakarta",
            address:"Jln Cikung 17, Jakarta Pusat",
            postal_code:"123456",
            provinsi_id:"31",
            kabupaten_id:"3173",
            phone_number:"0871938114080",
            email:"example@gmail.com",
            facebook:"example",
            total_students:300
        })
        expect(response.status).toBe(403)
    })
});
