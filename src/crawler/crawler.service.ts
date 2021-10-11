import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class CrawlerService {
  constructor(private readonly crawler: NestCrawlerService) {}

  @Cron('*/10 20 * * * *')
  async scrape() {
    interface ExampleCom {
      content: any;
    }
    const data: ExampleCom = await this.crawler.fetch({
      target:
        'https://myhome.nifty.com/tochi/chiba/chibashichuoku/athomef_3195068801/',
      fetch: {
        content: {
          selector: '.titleMain',
          how: 'html',
        },
      },
    });
    const htmlData = { html: data.content };
    console.log(JSON.stringify(htmlData));
  }
}
