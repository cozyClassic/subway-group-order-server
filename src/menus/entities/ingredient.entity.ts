import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { IngredientType } from './ingredientType.entity';
import { Menu } from './menu.entity';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => IngredientType,
    (ingredientType) => ingredientType.ingredients,
  )
  type: IngredientType;

  @ManyToMany(() => Menu, (menu) => menu.ingredients)
  menus: Menu[];
}
