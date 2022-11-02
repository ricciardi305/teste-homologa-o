import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EverythingFilterModule } from 'src/everything-filter/everything-filter.module';
import { TopHeadlineFilterModule } from './top-headline-filter/top-headline-filter.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    EverythingFilterModule,
    TopHeadlineFilterModule,
  ],
})
export class AppModule {}
