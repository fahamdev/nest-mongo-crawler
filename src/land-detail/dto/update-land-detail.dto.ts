import { PartialType } from '@nestjs/swagger';
import { CreateLandDetailDto } from './create-land-detail.dto';

export class UpdateLandDetailDto extends PartialType(CreateLandDetailDto) {}
