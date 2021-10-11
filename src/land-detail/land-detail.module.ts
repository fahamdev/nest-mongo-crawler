import { Module } from '@nestjs/common';
import { LandDetailService } from './land-detail.service';
import { LandDetailController } from './land-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LandDetail, LandDetailSchema } from './schemas/land-detail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LandDetail.name,
        schema: LandDetailSchema,
      },
    ]),
  ],
  controllers: [LandDetailController],
  providers: [LandDetailService],
})
export class LandDetailModule {}
