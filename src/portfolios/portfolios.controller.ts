import { Body, Controller, Post } from '@nestjs/common';
import { IndicesDto, GenerateDto } from './dto';
import { PortfoliosService } from './portfolios.service';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private portfolioService: PortfoliosService) {}

  @Post('add-indices')
  addIndices(@Body() dto: IndicesDto) {
    return this.portfolioService.addIndices(dto);
  }

  @Post('generate-portfolio')
  generatePortfolio(@Body() dto: GenerateDto) {
    return this.portfolioService.generatePortfolio(dto);
  }
}
