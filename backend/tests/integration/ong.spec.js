const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback(); // Clear test database
        await connection.migrate.latest();
    });

    afterAll(async () => {
       await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const res = await request(app)
            .post('/ongs')
            // .set('Authorization', 'validId') // header param
            .send({
                name: "APAD2",
                email: "contato@apad.com.br",
                whatsapp: "47000000000",
                city: "Rio do Sul",
                state: "SC"
            });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});