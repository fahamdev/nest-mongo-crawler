import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestCrawlerModule } from 'nest-crawler';
import { CrawlerService } from './crawler.service';
import { LandDetail, LandDetailSchema } from './entities/land-detail.entity';

@Module({
  imports: [
    NestCrawlerModule,
    MongooseModule.forFeature([
      {
        name: LandDetail.name,
        schema: LandDetailSchema,
      },
    ]),
  ],
  providers: [CrawlerService],
})
export class CrawlerModule {}
