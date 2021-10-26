import { Client } from 'pg';

const config = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'app-js'
};

const client = new Client(config);

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('Db is conected')
    }
});

export default client;