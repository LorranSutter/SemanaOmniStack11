const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

describe('ONG', () => {

    beforeAll(async () => {
        await connection.migrate.rollback(); // Clear test database
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should be able to create a new ONG', (done) => {
        request(app)
            .post('/ongs')
            // .set('Authorization', 'validId') // header param
            .send({
                name: "APAD2",
                email: "contato@apad.com.br",
                whatsapp: "47000000000",
                city: "Rio do Sul",
                state: "SC"
            })
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty('id');
                expect(res.body.id).toHaveLength(8);
                done();
            });
    });

    it('should be able to list registered ONGs', async (done) => {
        const obj = {
            name: "APAD1",
            email: "contato@apad.com.br",
            whatsapp: "47123456789",
            city: "Beautiful city",
            state: "AA"
        };
        await request(app)
            .post('/ongs')
            .send(obj);

        request(app)
            .get('/ongs')
            .expect(200)
            .end((err, res) => {

                if (err) return done(err);

                expect(() => assert(typeof res.body, Array));

                res.body.forEach(item => {
                    expect(item).toHaveProperty('id');
                    expect(item).toHaveProperty('name');
                    expect(item).toHaveProperty('email');
                    expect(item).toHaveProperty('whatsapp');
                    expect(item).toHaveProperty('city');
                    expect(item).toHaveProperty('state');
                });

                res.body.some(item => {
                    expect(() => assert(item, obj));
                })

                done();
            })

    });
});