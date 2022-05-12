import { ForbiddenException, Injectable } from '@nestjs/common';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { IndicesDto } from './dto';

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
            updatedAt: new Date(),
          },
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      throw new ForbiddenException('User not found');
    }
  }
}
