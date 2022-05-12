import { Controller, Get, Param, Delete } from '@nestjs/common';
import { TradingDaysService } from './trading-days.service';

@Controller('trading-days')
export class TradingDaysController {
  constructor(private readonly tradingDaysService: TradingDaysService) {}

  @Get()
  findAll() {
    return this.tradingDaysService.findAll();
  }

  @Get(':date')
  findOne(@Param('date') date: string) {
    return this.tradingDaysService.findOne(date);
  }

  @Delete(':date')
  remove(@Param('date') date: string) {
    return this.tradingDaysService.remove(date);
  }
}
