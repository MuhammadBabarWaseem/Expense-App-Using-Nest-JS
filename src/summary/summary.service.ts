import { ReportService } from './../report/report.service';
import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}

  calculateSummary() {
    const totalExpense = this.reportService
      .getAllReports(ReportType.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = this.reportService
      .getAllReports(ReportType.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);

    return {
      totalIncome,
      totalExpense,
      netIncome: totalIncome - totalExpense,
    };
  }
}
