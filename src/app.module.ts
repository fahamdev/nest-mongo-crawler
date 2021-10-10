import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { NestCrawlerModule } from 'nest-crawler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.mongooseUri),
    ScheduleModule.forRoot(),
    CrawlerModule,
    NestCrawlerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
