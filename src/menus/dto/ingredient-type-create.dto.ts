import { IsString } from 'class-validator';
import { IngredientType } from '../entities/handMadeFood/ingredientType.entity';
export class IngredentTypeCreateDto {
  @IsString()
  private name: string;

  toIngredientTypeEntity() {
    return IngredientType.from({
      name: this.name,
    });
  }
}
