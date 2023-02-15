import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log('GlobalMiddleware 1');
  next();
}
function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('GlobalMiddleware 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);
  await app.listen(3000);
}
bootstrap();
