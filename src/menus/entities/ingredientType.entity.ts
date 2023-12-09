import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity()
class IngredientType extends SoftDeleteEntity {
  // 빵, 고기, 치즈, 야채, 치즈, 소스

  @Column()
  name: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.type)
  ingredients: Ingredient[];

  static from({ name }) {
    const ingredientType = new IngredientType();
    ingredientType.name = name;
    return ingredientType;
  }
}

export { IngredientType };
