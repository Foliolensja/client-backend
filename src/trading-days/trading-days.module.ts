import { Module } from '@nestjs/common';
import { TradingDaysService } from './trading-days.service';
import { TradingDaysController } from './trading-days.controller';

@Module({
  controllers: [TradingDaysController],
  providers: [TradingDaysService],
})
export class TradingDaysModule {}
