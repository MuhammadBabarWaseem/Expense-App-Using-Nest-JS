import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { data, ReportType } from './data';

//:type for income , expense it changes dynamically
// From 1 hour 8 min Minutes Video https://www.youtube.com/watch?v=BiN-xzNkH_0

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Report Created Successfully!';
  }

  @Put(':id')
  updateReport() {
    return 'Report Updated Successfully!';
  }

  @Delete(':id')
  deleteReport() {
    return 'Report Deleted Successfully!';
  }
}
