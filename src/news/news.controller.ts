import { RequestParamsDto } from '../dto/request-params.dto';
import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NewsService } from 'src/news/news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getEverythingNews(@Query() query: RequestParamsDto) {
    if (!query.q) {
      throw new HttpException(
        'Required parameter is missing, the scope of your search is too broad. Please set the following required parameter and try again: q.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.newsService.getEverythingNews(query);
  }
}
