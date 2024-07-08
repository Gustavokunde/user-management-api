import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { UsersModule } from './infrastructure/repository/users.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmConfigModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
