import { PartialType } from '@nestjs/mapped-types';
import { IngredentCreateDto } from './ingredient-create.dto';

export class IngredentUpdateDto extends PartialType(IngredentCreateDto) {}
