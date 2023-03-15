import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Valida os dados do body - com dacorator
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
