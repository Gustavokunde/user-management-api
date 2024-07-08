import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const getTypeOrmModuleOptions = (): TypeOrmModuleOptions => {
  console.log(process.env.DB_NAME);
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DP_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: !!process.env.DB_SYNCHRONIZE,
    schema: process.env.DB_SCHEMA,
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  } as TypeOrmModuleOptions;
};
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
