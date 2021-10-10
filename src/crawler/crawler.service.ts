import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { NestCrawlerService } from 'nest-crawler';
import { LandDetail } from './entities/land-detail.entity';

@Injectable()
export class CrawlerService {
  constructor(
    private readonly crawler: NestCrawlerService,
    @InjectModel(LandDetail.name)
    private readonly landDetailModel: Model<LandDetail>,
  ) {}

  @Cron('*/10 * * * * *')
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

  findAllLandDetail() {
    return this.landDetailModel.find().exec();
  }

  async findOneLandDetail(id: number) {
    const landDetails = await this.landDetailModel
      .findOne({ nifty_id: id })
      .exec();
    if (!landDetails) {
      throw new NotFoundException(`LandDetail with nifty_id ${id} not found`);
    }
  }

  createLandDetail(createlandDetailDto) {
    const landDetail = new this.landDetailModel(createlandDetailDto);
    return landDetail.save();
  }

  async updateLandDetail(id: number, updateLandDetailDto) {
    const existingLandDetail = await this.landDetailModel
      .findOneAndUpdate(
        { nifty_id: id },
        { $set: updateLandDetailDto },
        { new: true },
      )
      .exec();

    if (!existingLandDetail) {
      throw new NotFoundException(`LandDetail with nifty_id ${id} not found`);
    }
    return existingLandDetail;
  }
}
