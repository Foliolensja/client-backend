import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SummariesService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    try {
      const summaries = await this.prisma.summary.findMany();

      return summaries;
    } catch (error) {
      throw error;
    }
  }

  async findOne(date: string) {
    try {
      const summary = await this.prisma.summary.findUnique({
        where: {
          date: date,
        },
      });

      return summary;
    } catch (error) {
      throw error;
    }
  }
}
