import { PartialType } from '@nestjs/mapped-types';
import { IngredentTypeCreateDto } from './ingredient-type-create.dto';

export class IngredentTypeUpdateDto extends PartialType(
  IngredentTypeCreateDto,
) {}
