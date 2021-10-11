import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLandDetailDto } from './dto/create-land-detail.dto';
import { UpdateLandDetailDto } from './dto/update-land-detail.dto';
import { LandDetail } from './schemas/land-detail.schema';

@Injectable()
export class LandDetailService {
  constructor(
    @InjectModel(LandDetail.name)
    private readonly landDetailModel: Model<LandDetail>,
  ) {}

  create(createLandDetailDto: CreateLandDetailDto) {
    const landDetail = new this.landDetailModel(createLandDetailDto);
    return landDetail.save();
  }

  async findAll(): Promise<LandDetail[]> {
    return await this.landDetailModel.find().lean().exec();
  }

  async findOne(id: string) {
    const landDetails = await this.landDetailModel
      .findOne({ nifty_id: id })
      .lean()
      .exec();
    if (!landDetails) {
      throw new NotFoundException(`LandDetail with nifty_id ${id} not found`);
    }
    return landDetails;
  }

  async update(id: string, updateLandDetailDto: UpdateLandDetailDto) {
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
