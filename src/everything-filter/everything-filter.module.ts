import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EverythingFilterController } from 'src/everything-filter/everything-filter.controller';
import { EverythingFilterService } from 'src/everything-filter/everything-filter.service';

@Module({
  imports: [HttpModule],
  providers: [EverythingFilterService],
  controllers: [EverythingFilterController],
})
export class EverythingFilterModule {}
