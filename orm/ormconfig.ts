import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const baseOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['../src/**/*.entity.ts'],
  dropSchema: false,
  synchronize: false,
  useUTC: true, /* PostgreSQL */
  // timezone: 'Z', /* MySQL */
  logging: true,
  migrationsRun: true,
};

const migrationOptions = {
  ...baseOptions,
  migrationsTableName: '__migrations',
  migrations: ['../migrations/*.ts'],
};

const seedOptions = {
  ...baseOptions,
  migrationsTableName: '__seeds',
  migrations: ['../seeds/*.ts'],
};

export default { migrationOptions, seedOptions };
