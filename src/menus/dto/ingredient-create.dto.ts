import { IsString, IsOptional } from 'class-validator';
import { Ingredient } from '../entities/ingredient.entity';
export class IngredentCreateDto {
  @IsString()
  private name: string;

  @IsOptional()
  @IsString()
  private photo: string;

  toIngredientEntity() {
    return Ingredient.from({
      name: this.name,
      photo: this.photo,
    });
  }
}
