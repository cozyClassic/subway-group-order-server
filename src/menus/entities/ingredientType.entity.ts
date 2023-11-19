import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity()
export class IngredientType {
  // 빵, 고기, 치즈, 야채, 치즈, 소스
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isFeeOption: boolean;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.type)
  ingredients: Ingredient[];
}