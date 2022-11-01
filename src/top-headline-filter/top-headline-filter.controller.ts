import { Controller, Get, Query } from '@nestjs/common';
import { RequestParamsDto } from 'src/dto/request-params.dto';
import { TopHeadlineFilterService } from './top-headline-filter.service';

@Controller('top-headlines')
export class TopHeadlineFilterController {
  constructor(
    private readonly topHeadlineFilterService: TopHeadlineFilterService,
  ) {}

  @Get()
  getTopHeadline(@Query() query: RequestParamsDto) {
    return this.topHeadlineFilterService.getTopHeadlineNews(query);
  }
}
