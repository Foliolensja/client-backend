import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TradingDaysService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    try {
      const tradingDays = await this.prisma.tradingDay.findMany();

      return tradingDays;
    } catch (error) {
      throw error;
    }
  }

  async findOne(date: string) {
    try {
      const tradingDay = await this.prisma.tradingDay.findUnique({
        where: {
          date: date,
        },
      });

      return tradingDay;
    } catch (error) {
      throw error;
    }
  }

  twoDigits(val: number) {
    const x = val.toString();
    if (x.length < 2) {
      return '0' + x;
    }
    return x;
  }

  async findDate() {
    try {
      const date = new Date();
      let dateString =
        date.getFullYear() +
        '-' +
        this.twoDigits(date.getMonth() + 1) +
        '-' +
        this.twoDigits(date.getDate());

      let tradingDay = await this.prisma.tradingDay.findUnique({
        where: {
          date: dateString,
        },
      });

      while (!tradingDay) {
        date.setDate(date.getDate() - 1);
        dateString =
          date.getFullYear() +
          '-' +
          this.twoDigits(date.getMonth() + 1) +
          '-' +
          this.twoDigits(date.getDate());

        tradingDay = await this.prisma.tradingDay.findUnique({
          where: {
            date: dateString,
          },
        });
      }

      return dateString;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException(
          'Could not retrieve most recent activity date',
        );
      }
      throw error;
    }
  }
}
