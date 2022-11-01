import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TopHeadlineFilterService } from './top-headline-filter.service';
import { TopHeadlineFilterController } from './top-headline-filter.controller';

@Module({
  imports: [HttpModule],
  controllers: [TopHeadlineFilterController],
  providers: [TopHeadlineFilterService],
})
export class TopHeadlineFilterModule {}
