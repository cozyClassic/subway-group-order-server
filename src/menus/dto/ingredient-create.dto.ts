import { IsString, IsOptional, IsNumber } from 'class-validator';
import { Ingredient } from '../entities/ingredient.entity';
export class IngredentCreateDto {
  @IsString()
  private name: string;

  @IsOptional()
  @IsString()
  private photo: string;

  @IsNumber()
  typeId: number;

  toIngredientEntity() {
    return Ingredient.from({
      name: this.name,
      photo: this.photo,
      type: { id: this.typeId }, // TODO: bypass - fix it
    });
  }
}
