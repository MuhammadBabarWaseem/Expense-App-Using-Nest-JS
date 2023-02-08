import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      //Working Of Interceptor =>
      // if the client is going to make a request to the server,
      // before actually reaching the server it's going to be intercepted
      // by the interceptor in there we can have any sorrt of processing,
      //  we can modify the request and then it's going to go ahead and be
      //  sent to the server, same process for the client
      provide: APP_INTERCEPTOR,
      // Serializer is just a way that we can modify and change our data,
      // and this classSerializerInterceptor a process before request send
      //  to client it can process or modify it then send the modified data to the client
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
