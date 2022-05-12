import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { TradingDaysModule } from './trading-days/trading-days.module';
import { IndicesModule } from './indices/indices.module';
import { SummariesModule } from './summaries/summaries.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule, PortfoliosModule, TradingDaysModule, IndicesModule, SummariesModule],
})
export class AppModule {}
