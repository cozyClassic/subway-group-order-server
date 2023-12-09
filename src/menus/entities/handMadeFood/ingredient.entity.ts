import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IngredientType } from './ingredientType.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

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
