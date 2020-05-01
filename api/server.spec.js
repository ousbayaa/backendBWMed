const server = require('./server');
const db = require('../database/dbconfig');
const request = require('supertest');

beforeEach(async () => {
    await db('users').truncate();
})

describe('TESTS', () => {
    describe('Register user', () => {
        it('should recieve a 201 when a user is successfuly registered', () => {
            return request(server)
            .post('/api/auth/register')
            .send({username: "mary", password: "jean"})
            .then(res => expect(res.status).toBe(201))
        })
    })
});