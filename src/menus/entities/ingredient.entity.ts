import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { IngredientType } from './ingredientType.entity';

@Entity()
class Ingredient extends SoftDeleteEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  photo: string;

  @ManyToOne(
    () => IngredientType,
    (ingredientType) => ingredientType.ingredients,
  )
  type: IngredientType;

  static from({ name, photo, type }) {
    const ingredient = new Ingredient();
    ingredient.name = name;
    ingredient.photo = photo || null;
    ingredient.type = type;
    return ingredient;
  }
}

export { Ingredient };
