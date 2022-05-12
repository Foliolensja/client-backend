import { Controller, Get, Param } from '@nestjs/common';
import { IndicesService } from './indices.service';

@Controller('indices')
export class IndicesController {
  constructor(private readonly indicesService: IndicesService) {}

  @Get()
  findAll() {
    return this.indicesService.findAll();
  }
  @Get(':date')
  findOne(@Param('date') date: string) {
    return this.indicesService.findOne(date);
  }
}
