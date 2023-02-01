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
    return 'Created Successfully';
  }

  @Put(':id')
  updateReport() {
    return 'Updated Successfully';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted Successfully';
  }
}
