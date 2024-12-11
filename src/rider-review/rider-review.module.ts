import { Module } from '@nestjs/common';
import { RiderReviewService } from './rider-review.service';
import { RiderReviewController } from './rider-review.controller';

@Module({
  controllers: [RiderReviewController],
  providers: [RiderReviewService],
})
export class RiderReviewModule {}
