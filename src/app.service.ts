import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly NEWS_API_KEY = process.env.NEWS_API_KEY;
  private readonly NEWS_API_URL = process.env.NEWS_API_URL;

  constructor(private readonly httpService: HttpService) {}
  async getNews() {
    const url = `${this.NEWS_API_URL}/top-headlines/sources?category=technology`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.NEWS_API_KEY}`,
      },
    };

    const response = await lastValueFrom(this.httpService.get(url, config));

    console.log(response.data);

    return;
  }
}
