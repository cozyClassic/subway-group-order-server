import { PartialType } from '@nestjs/mapped-types';
import { IngredentTypeCreateDto } from './ingredientType-create.dto';

export class IngredentTypeUpdateDto extends PartialType(
  IngredentTypeCreateDto,
) {}
