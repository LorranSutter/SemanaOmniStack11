const request = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

describe('Session', () => {
    beforeAll(async () => {
        await connection.migrate.rollback(); // Clear test database
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should return an error if it does not find an id', async (done) => {
        request(app)
            .post('/sessions')
            .send({
                id: "123456"
            })
            .expect(400)
            .end((err, res) => {
                if (err) return done(err);

                expect(res.body).toHaveProperty('error', 'No ONG found with this id!')

                done();
            });
    });

    it('should be able to init a new session', async (done) => {
        const obj = {
            name: "APAD1",
            email: "contato@apad.com.br",
            whatsapp: "47123456789",
            city: "Beautiful city",
            state: "AA"
        };
        const res = await request(app)
            .post('/ongs')
            .send(obj);

        const id = res.body.id;

        request(app)
            .post('/sessions')
            .send({
                id: id
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                expect(res.body).toHaveProperty('name', obj.name);

                done();
            })
    });
});