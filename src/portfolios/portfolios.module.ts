import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';

@Module({
  providers: [PortfoliosService],
  controllers: [PortfoliosController],
})
export class PortfoliosModule {}
