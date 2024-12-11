import { Injectable } from '@nestjs/common';
import { CreateRiderReviewDto } from './dto/create-rider-review.dto';
import { UpdateRiderReviewDto } from './dto/update-rider-review.dto';

@Injectable()
export class RiderReviewService {
  create(createRiderReviewDto: CreateRiderReviewDto) {
    return 'This action adds a new riderReview';
  }

  findAll() {
    return `This action returns all riderReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riderReview`;
  }

  update(id: number, updateRiderReviewDto: UpdateRiderReviewDto) {
    return `This action updates a #${id} riderReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} riderReview`;
  }
}
