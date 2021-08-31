require('dotenv').config();

const dir = NODE_ENV === 'production' ? 'build' : 'src';

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
    database: DB_NAME,
    synchronize: NODE_ENV === 'production' ? false : true,
    logging: NODE_ENV === 'production' ? false : true,
    entities: [`${dir}/database/entities/**/*.{ts,js}`],
    migrations: [`${dir}/database/migrations/**/*.{ts,js}`],
    subscribers: [`${dir}/database/subscribers/**/*.{ts,js}`],
    seeds: [`${dir}/database/seeds/**/*.{ts,js}`],
    factories: [`${dir}/database/factories/**/*.{ts,js}`],
    cli: {
        migrationsDir: `${dir}/database/migrations`,
        entitiesDir: `${dir}/database/entities`,
        subscribersDir: `${dir}/database/subscribers`,
    },
};
