import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const users = await this.prisma.user.findMany();

      users.map((user) => delete user.hash);

      return users;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    try {
      const res = await this.prisma.user.delete({
        where: {
          id: id,
        },
      });

      return {
        message: `Successfully deleted ${res.firstName} from the database`,
        res,
      };
    } catch (error) {
      throw new ForbiddenException('User could not be deleted');
    }
  }
}
