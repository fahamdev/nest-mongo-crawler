import { Module } from '@nestjs/common';
import { NestCrawlerModule } from 'nest-crawler';
import { CrawlerService } from './crawler.service';

@Module({
  imports: [NestCrawlerModule],
  providers: [CrawlerService],
})
export class CrawlerModule {}
