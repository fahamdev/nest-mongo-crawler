import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class LandDetail {
  @Prop()
  name: string;

  @Prop({ index: true })
  nifty_id: number;

  @Prop()
  details_link: string;
}

export const LandDetailSchema = SchemaFactory.createForClass(LandDetail);
