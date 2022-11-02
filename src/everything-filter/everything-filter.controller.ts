import { RequestParamsDto } from '../dto/request-params.dto';
import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EverythingFilterService } from 'src/everything-filter/everything-filter.service';

@Controller('everything')
export class EverythingFilterController {
  constructor(
    private readonly everythingFilterService: EverythingFilterService,
  ) {}

  @Get()
  getEverythingNews(@Query() query: RequestParamsDto) {
    if (!query.q) {
      throw new HttpException(
        'Required parameter is missing, the scope of your search is too broad. Please set the following required parameter and try again: q.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.everythingFilterService.getEverythingNews(query);
  }
}
