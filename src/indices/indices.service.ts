import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IndicesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const indices = await this.prisma.indexChange.findMany();
      console.log(indices);
      return indices;
    } catch (error) {
      throw error;
    }
  }

  async findOne(date: string) {
    try {
      const indexChange = await this.prisma.indexChange.findUnique({
        where: {
          date: date,
        },
      });
      return indexChange;
    } catch (error) {
      throw error;
    }
  }
}
