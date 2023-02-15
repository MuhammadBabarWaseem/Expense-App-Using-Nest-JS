import { ReportModule } from './../report/report.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { summaryMiddleware } from './summary.middleware';

@Module({
  imports: [ReportModule],
  controllers: [SummaryController],
  providers: [SummaryService],
})
export class SummaryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(summaryMiddleware).forRoutes('summary');
  }
}
