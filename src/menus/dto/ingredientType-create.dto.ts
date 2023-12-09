import { IsString } from 'class-validator';
import { IngredientType } from '../entities/ingredientType.entity';
export class IngredentTypeCreateDto {
  @IsString()
  private name: string;

  toIngredientTypeEntity() {
    return IngredientType.from({
      name: this.name,
    });
  }
}
