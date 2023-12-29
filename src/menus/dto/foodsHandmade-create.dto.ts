import { IsString, IsOptional } from 'class-validator';
import { FoodsHandMadeIngredientTypeCreateDto } from './foodsHandmadeIngredientType-create.dto';

export class FoodsHandMadeCreateDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  photo: string;

  @IsOptional()
  ingredientTypes: FoodsHandMadeIngredientTypeCreateDto;
}
