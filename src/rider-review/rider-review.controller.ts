import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiderReviewService } from './rider-review.service';
import { CreateRiderReviewDto } from './dto/create-rider-review.dto';
import { UpdateRiderReviewDto } from './dto/update-rider-review.dto';

@Controller('rider-review')
export class RiderReviewController {
  constructor(private readonly riderReviewService: RiderReviewService) {}

  @Post()
  create(@Body() createRiderReviewDto: CreateRiderReviewDto) {
    return this.riderReviewService.create(createRiderReviewDto);
  }

  @Get()
  findAll() {
    return this.riderReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riderReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiderReviewDto: UpdateRiderReviewDto) {
    return this.riderReviewService.update(+id, updateRiderReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riderReviewService.remove(+id);
  }
}
