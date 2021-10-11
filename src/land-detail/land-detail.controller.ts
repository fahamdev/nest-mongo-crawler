import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { LandDetailService } from './land-detail.service';
import { CreateLandDetailDto } from './dto/create-land-detail.dto';
import { UpdateLandDetailDto } from './dto/update-land-detail.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('land-detail')
@ApiTags('User')
export class LandDetailController {
  constructor(private readonly landDetailService: LandDetailService) {}

  @Post()
  create(@Body() createLandDetailDto: CreateLandDetailDto) {
    return this.landDetailService.create(createLandDetailDto);
  }

  @Get()
  findAll() {
    return this.landDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLandDetailDto: UpdateLandDetailDto,
  ) {
    return this.landDetailService.update(id, updateLandDetailDto);
  }
}
