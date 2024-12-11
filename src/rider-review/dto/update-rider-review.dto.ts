import { PartialType } from '@nestjs/mapped-types';
import { CreateRiderReviewDto } from './create-rider-review.dto';

export class UpdateRiderReviewDto extends PartialType(CreateRiderReviewDto) {}
