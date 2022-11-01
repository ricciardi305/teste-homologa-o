import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ArticleInfosDTO } from 'src/dto/articlesInfo.dto';
import { NewsDTO } from 'src/dto/news.dto';
import { RequestParamsDto } from 'src/dto/request-params.dto';

@Injectable()
export class TopHeadlineFilterService {
  private readonly NEWS_API_KEY = process.env.NEWS_API_KEY;
  private readonly NEWS_API_URL = process.env.NEWS_API_URL;

  constructor(private readonly httpService: HttpService) {}

  async getTopHeadlineNews(query: RequestParamsDto) {
    if (!query.category && !query.country && !query.q) {
      throw new HttpException(
        'Required parameters are missing, the scope of your search is too broad. Please set any of the following required parameters and try again: q, category or country.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const url = `${this.NEWS_API_URL}/top-headlines?${
      query.q ? '&q=' + query.q : null
    }${query.category ? '&category=' + query.category : null}${
      query.country ? '&country=' + query.country : null
    }${query.page ? '&page=' + query.page : null}`;
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
