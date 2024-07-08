import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import DataSource from './infrastructure/config/typeorm/data-source';

async function bootstrap() {
  if (!DataSource.isInitialized) {
    await DataSource.initialize().then((response) => {
      console.log('database initialized: ', response.isInitialized);
    });
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
