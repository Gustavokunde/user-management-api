import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';

@Module({
  imports: [UsersModule, TypeormModule, EnvironmentConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
