import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getUserByID({ userID }: { userID: number }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userID,
      },
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
      },
    });
    console.log(user);
    return user;
  }

  createUser(user: User) {
    console.log('Backend:', user);
    return `User data received in backend`;
  }
}
