import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto, UpdatePasswordDto } from './dto';
import * as argon from 'argon2';

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

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          firstName: updateUserDto.firstName,
          lastName: updateUserDto.lastName,
          dob: updateUserDto.dob,
          salary: updateUserDto.salary,
          riskRating: updateUserDto.riskRating,
          netWorth: updateUserDto.netWorth,
          updated: true,
        },
      });

      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('User could not be updated');
      }
      throw error;
    }
  }

  async updatePassword(id: string, updatePasswordDto: UpdatePasswordDto) {
    const hash = await argon.hash(updatePasswordDto.newPassword);
    try {
      const userInfo = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });

      const passwordMatches = await argon.verify(
        userInfo.hash,
        updatePasswordDto.oldPassword,
      );

      if (passwordMatches) {
        const user = await this.prisma.user.update({
          where: {
            id: id,
          },
          data: {
            hash,
          },
        });

        delete user.hash;
        return user;
      } else {
        throw new ForbiddenException('Your old password is incorrect');
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException(
          'Password cannot be changed. Please try again later',
        );
      }
      throw error;
    }
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
