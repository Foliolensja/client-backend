import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SummariesService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    try {
      const tradingDays = await this.prisma.summary.findMany();

      return tradingDays;
    } catch (error) {
      throw error;
    }
  }

  async findOne(date: string) {
    try {
      const tradingDay = await this.prisma.summary.findUnique({
        where: {
          date: date,
        },
      });

      return tradingDay;
    } catch (error) {
      throw error;
    }
  }
}
