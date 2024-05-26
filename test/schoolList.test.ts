import app from '../src/server'
import request from 'supertest'

describe('schoolList', () => {
    it('get_school_list', async() => {
        const response = await request(app).get('/school-list')
        expect(response.status).toBe(200)
    });
    it('create_school_list_succes_test',async()=>{
        const response = await request(app).post('/school-list').send({
            category:"Negeri",
            name:"SMA 1 Jakarta",
            address:"Jln Cikung 17, Jakarta Pusat",
            postal_code:"12345",
            province_id:"31",
            regency_id:"3173",
            phone_number:"0871938114080",
            email:"example@gmail.com",
            facebook:"example",
            total_students:300
        })
        expect(response.status).toBe(200)
    })
    it('create_school_list_error_test',async()=>{
        const response = await request(app).post('/school-list').send({
            category:"Negeri",
            name:"SMA 1 Jakarta",
            address:"Jln Cikung 17, Jakarta Pusat",
            postal_code:"123456",
            province_id:"31",
            regency_id:"3173",
            phone_number:"0871938114080",
            email:"example@gmail.com",
            facebook:"example",
            total_students:300
        })
        expect(response.status).toBe(403)
    })
});
