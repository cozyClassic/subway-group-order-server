import { Entity, Column, ManyToOne } from 'typeorm';
import { FoodsHandMade } from './foodsHandMade.entity';
import { IngredientType } from './ingredientType.entity';

@Entity()
export class FoodsHandMadeIngredientType {
  // 필수 여부
  @Column()
  isRequired: boolean;

  // 디폴트 재료
  @Column()
  defaultIngredientId: number;

  // 선택가능한 재료 목록
  @Column()
  optionalIngredientIds: number[];

  // 한번에 여러개 선택 가능 여부
  @Column()
  isMultiple: boolean;

  @ManyToOne(
    () => FoodsHandMade,
    (foodsHandMade) => foodsHandMade.foodsHandMadeIngredientTypes,
  )
  public foodsHandMade: FoodsHandMade;

  @ManyToOne(
    () => IngredientType,
    (ingredientType) => ingredientType.foodsHandMadeIngredientTypes,
  )
  public ingredientType: IngredientType;
}
