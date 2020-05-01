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
    describe('Strains', () => {
        it('should receive a 400 if a user does not provide a JWT', () => {
            return request(server)
            .post('/api/strains')
            .then(res => expect(res.status).toBe(400))
        })
    })
    describe('Login', () => {
        it('should receive 401 if a user inputs incorrect password', () => {
            return request(server)
            .post('/api/auth/register')
            .send({username:"mary", password:"jane"})
            .then(res => {
                return request(server)
                .post('/api/auth/login')
                .send({username:"mary", password:"test"})
                .then(res => expect(res.status).toBe(401))
            })
        })
    })
    describe('Strain ID', () => {
        it('should receive a 404 if a user inputs invalid Strain ID', () => {
            return request(server)
            .post('/api/strains/id')
            
        })
    })
});