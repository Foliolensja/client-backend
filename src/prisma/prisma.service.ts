import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://admin:G8WtzJ6%26za%254%21mqH@foliolens-test.fqsnb.mongodb.net/database?retryWrites=true&w=majority',
        },
      },
    });
  }
}
