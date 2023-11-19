import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { MenuCategory } from './menuCategory.entity';
import { Ingredient } from './ingredient.entity';

// 메뉴는 카테고리를 갖는다.
// 메뉴는 재료가 들어간 것이 있고, 아닌 것이 있음 (샌드위치, 랩, 샐러드 vs 음료, 쿠키)
// 재료가 들어가는 메뉴 중에는, 옵션이 변경이 가능한 것이 있고, 아닌 것이 있음. 이는 카테고리와는 다른 것임.

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  basePrice: number;

  @Column()
  isImmutable: boolean;

  @Column()
  isWithIngredients: boolean;

  @ManyToOne(() => MenuCategory, (menuCategory) => menuCategory.menus)
  category: MenuCategory;

  @ManyToMany(() => Ingredient, (ingredient) => ingredient.menus)
  ingredients: Ingredient[];
}
