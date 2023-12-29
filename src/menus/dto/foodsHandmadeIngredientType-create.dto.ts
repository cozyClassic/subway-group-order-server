import { IsBoolean, IsArray, IsNumber } from 'class-validator';

export class FoodsHandMadeIngredientTypeCreateDto {
  @IsBoolean()
  isRequired: boolean;

  @IsNumber()
  defaultIngredientId: number;

  @IsArray()
  selectableIngredientIds: number[];

  @IsBoolean()
  isMultiple: boolean;
}
