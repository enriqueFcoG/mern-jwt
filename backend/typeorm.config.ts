import { DataSource } from "typeorm";
import { config } from "dotenv";
//here we need to load the .env file manually since this file is not processed by NestJS
config();

// TypeORM DataSource configuration needed for running migrations
export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
})