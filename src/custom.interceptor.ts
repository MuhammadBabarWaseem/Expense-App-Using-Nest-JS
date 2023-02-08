// Interceptor is an entity inside of NESTJS
// & Each entity is created by a class
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log('This Is Intercepting The Requesting');

    return handler.handle().pipe(
      map((data) => {
        const response = {
          ...data,
          createdAt: data.created_at,
        };
        delete response.updated_at;
        delete response.created_at;
        return response;
      }),
    );
  }
}
