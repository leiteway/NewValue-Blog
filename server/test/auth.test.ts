import request from 'supertest';
import { app, server } from '../app';
import { admin } from './helpers/test-helpers';
import connection_db from '../database/connection_db';


const api = request(app);

describe('REGISTER', () => {
    
    test('Register response body should return a token and status 201', async() => {
        const response = await api.post('/auth/register').send(
            admin
        )
        expect(response.status).toBe(201)
    })
});

afterAll( async () => {
    server.close();
    await connection_db.sync({force: true });
    console.log('All databases are clean')
 });