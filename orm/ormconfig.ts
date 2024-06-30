import { DataSourceOptions } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: join('..', '.env') });

const baseOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.ORM_HOST,
  port: Number(process.env.ORM_PORT),
  username: process.env.ORM_USERNAME,
  password: process.env.ORM_PASSWORD,
  database: process.env.ORM_DB,
  entities: [join('..', 'src', '**', '*.entity.ts')],
  dropSchema: false,
  synchronize: false,
  timezone: 'Z',
  logging: true,
  migrationsRun: true,
};

const migrationOptions = {
  ...baseOptions,
  migrationsTableName: '__migrations',
  migrations: [join('..', 'migrations', '*.ts')],
};

const seedOptions = {
  ...baseOptions,
  migrationsTableName: '__seeds',
  migrations: [join('..', 'seeds', '*.ts')],
};

export default { migrationOptions, seedOptions };
