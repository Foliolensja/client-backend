import { Body, Controller, Get, Post } from '@nestjs/common';
import { IndicesDto, GenerateDto } from './dto';
import { PortfoliosService } from './portfolios.service';

@Controller('portfolios')
export class PortfoliosController {
  constructor(private portfolioService: PortfoliosService) {}

  @Post('add-indices')
  addIndices(@Body() dto: IndicesDto) {
    try {
      return this.portfolioService.addIndices(dto);
    } catch (error) {
      console.log(error);
    }
  }

  @Post('generate-portfolio')
  generatePortfolio(@Body() dto: GenerateDto) {
    return this.portfolioService.generatePortfolio(dto);
  }

  @Post('test')
  test(@Body() dto: any) {
    console.log(dto);
    return 1;
  }
}
