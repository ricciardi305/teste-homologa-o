import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { NewsModule } from './news/news.module';
import { TopHeadlineFilterModule } from './top-headline-filter/top-headline-filter.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    NewsModule,
    TopHeadlineFilterModule,
  ],
})
export class AppModule {}
