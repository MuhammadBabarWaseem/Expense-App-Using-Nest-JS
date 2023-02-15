import { summaryGuard } from './summary.guard';
import { SummaryService } from './summary.service';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  @UseGuards(new summaryGuard())
  getSummary() {
    return this.summaryService.calculateSummary();
  }
}
