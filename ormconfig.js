require('dotenv/config');

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
        '**/entities/*.{ts,js}',
    ],
    migrations:[
        '**/core/database/migrations/*.{ts,js}',
    ],
    cli: {
        entitiesDir: "/src/entities",
        migrationsDir: "src/core/database/migrations"
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};