import { Test, TestingModule } from '@nestjs/testing';
import { RiderReviewController } from './rider-review.controller';
import { RiderReviewService } from './rider-review.service';

describe('RiderReviewController', () => {
  let controller: RiderReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderReviewController],
      providers: [RiderReviewService],
    }).compile();

    controller = module.get<RiderReviewController>(RiderReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
