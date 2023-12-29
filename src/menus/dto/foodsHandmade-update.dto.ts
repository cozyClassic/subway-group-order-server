import { PartialType } from '@nestjs/mapped-types';
import { FoodsHandMadeCreateDto } from './foodsHandMade-create.dto';

export class FoodsHandMadeUpdateDto extends PartialType(
  FoodsHandMadeCreateDto,
) {}
