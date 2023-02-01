import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

//:type for income , expense it changes dynamically
@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports() {
    return [];
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
