const dotenv = require('dotenv');

dotenv.config();

const {
    DB_USER,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME,
    NODE_ENV
} = process.env;

module.exports = {
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    databse: DB_NAME,
    synchronize: NODE_ENV === 'production' ? false : true,
    logging: NODE_ENV === 'production' ? false : true,
    entities: ['src/database/entities/**/*.{ts,js}'],
    migrations: ['src/database/migrations/**/*.{ts,js}'],
    seeds: ['src/database/seeds/**/*.{ts,js}'],
    factories: ['src/database/factories/**/*.{ts,js}'],
    cli: {
        migrationsDir: 'src/database/migrations',
        entitiesDir: 'src/database/entities',
        subscribersDir: 'src/database/subscribers'
    }
};
