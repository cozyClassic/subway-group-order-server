import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ingredient } from './ingredient.entity';

@Entity()
export class IngredientType {
  // 빵, 고기, 치즈, 야채, 치즈, 소스
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.type)
  ingredients: Ingredient[];

  // isCustomerSelectable - 재료와 음식 사이에 옵션
}
