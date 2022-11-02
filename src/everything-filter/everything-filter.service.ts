import { RequestParamsDto } from '../dto/request-params.dto';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ArticleInfosDTO } from 'src/dto/articlesInfo.dto';
import { NewsDTO } from '../dto/news.dto';

@Injectable()
export class EverythingFilterService {
  private readonly NEWS_API_KEY = process.env.NEWS_API_KEY;
  private readonly NEWS_API_URL = process.env.NEWS_API_URL;

  constructor(private readonly httpService: HttpService) {}
  async getEverythingNews(query: RequestParamsDto) {
    const url = `${this.NEWS_API_URL}/everything?${'q=' + query.q}&pageSize=20${
      query.page ? '&page=' + query.page : null
    }`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.NEWS_API_KEY}`,
      },
    };

    const response = await lastValueFrom(this.httpService.get(url, config));

    const articlesInfos: ArticleInfosDTO[] = [];

    response.data.articles.forEach((element: NewsDTO) => {
      const { author, title, description } = element;
      articlesInfos.push({ author, title, description });
    });

    return articlesInfos;
  }
}
