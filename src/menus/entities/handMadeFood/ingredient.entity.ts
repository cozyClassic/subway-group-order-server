import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Column, ManyToOne } from 'typeorm';
import { IngredientType } from './ingredientType.entity';

export class Ingredient extends SoftDeleteEntity {
  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  photo: string;

  @ManyToOne(
    () => IngredientType,
    (ingredientType) => ingredientType.ingredients,
  )
  type: IngredientType;
}
