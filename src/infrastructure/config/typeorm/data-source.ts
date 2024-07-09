import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
export const dataSourceObject = {
  type: 'postgres' as const,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  migrations: ['server/migrations/**/*{.js}'],
  migrationsRun: true,
  migrationsTableName: 'migrations',
  cli: {
    migrationsDir: __dirname + '/src/migrations/',
  },
  synchronize: true,
};

export default new DataSource({ ...dataSourceObject });
