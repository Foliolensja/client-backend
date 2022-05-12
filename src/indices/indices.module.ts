import { Module } from '@nestjs/common';
import { IndicesService } from './indices.service';
import { IndicesController } from './indices.controller';

@Module({
  controllers: [IndicesController],
  providers: [IndicesService]
})
export class IndicesModule {}
