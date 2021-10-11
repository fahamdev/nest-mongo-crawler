import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateLandDetailDto {
  @IsString()
  @ApiProperty({ description: 'Name of the land' })
  name: string;

  @IsString()
  @ApiProperty({ description: 'Unique Nifty ID for the land' })
  nifty_id: string;

  @IsString()
  @IsUrl()
  @ApiProperty({ description: 'URL of land details page' })
  details_link: string;
}
