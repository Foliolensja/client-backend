import { Injectable } from '@nestjs/common';

@Injectable()
export class TradingDaysService {
  findAll() {
    return `This action returns all tradingDays`;
  }

  findOne(date: string) {
    return `This action returns a #${date} tradingDay`;
  }

  remove(date: string) {
    return `This action removes a #${date} tradingDay`;
  }
}
