import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { AuthModule } from './infrastructure/repository/auth/auth.module';
import { UsersModule } from './infrastructure/repository/user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmConfigModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
