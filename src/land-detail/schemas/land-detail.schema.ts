import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class LandDetail {
  @Prop()
  @ApiProperty({ description: 'Name of the land' })
  name: string;

  @Prop({ index: true, unique: true })
  @ApiProperty({ description: 'Unique Nifty ID for the land' })
  nifty_id: string;

  @Prop()
  @ApiProperty({ description: 'URL of land details page' })
  details_link: string;
}

export const LandDetailSchema = SchemaFactory.createForClass(LandDetail);
