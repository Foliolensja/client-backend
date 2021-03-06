import { ForbiddenException, Injectable } from '@nestjs/common';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateDto, IndicesDto } from './dto';
// import fetch from 'node-fetch';
import fetch from 'node-fetch';

@Injectable()
export class PortfoliosService {
  constructor(private prisma: PrismaService) {}

  async addIndices(dto: IndicesDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: dto.userId,
        },
        data: {
          portfolio: {
            indices: dto.indices,
          },
          tracker: {
            dates: dto.tracker,
          },
          updated: false,
          generating: false,
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      throw new ForbiddenException('User not found');
    }
  }

  async generatePortfolio(dto: GenerateDto) {
    const body = {
      id: dto.userId,
      age: dto.age,
      salary: dto.salary,
      net_worth: dto.net_worth,
      reported_risk: dto.reported_risk,
    };
    const response = await fetch(
      'https://foliolens-data-science.herokuapp.com/generate-portfolio',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en-US',
        },
        body: JSON.stringify(body),
      },
    );

    console.log(response);

    if (response.status === 200) {
      try {
        await this.prisma.user.update({
          where: {
            id: dto.userId,
          },
          data: {
            generating: true,
          },
        });
        return { result: 'Process has started.' };
      } catch (error) {
        return { result: error };
      }
    }
    return { result: 'An error occured.' };
  }
}
