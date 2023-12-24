import { SoftDeleteEntity } from 'src/common/softDeleteInterface.entity';
import { Entity, Column, OneToOne, PrimaryColumn, OneToMany } from 'typeorm';

import { Merchandise } from './merchandise.entity';
import { FoodsHandMadeIngredientType } from './foodsHandMadeIngredientType.entity';

@Entity()
class FoodsHandMade extends SoftDeleteEntity {
  @PrimaryColumn()
  @OneToOne(() => Merchandise, (merchandise) => merchandise.id)
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  photo: string;

  @OneToMany(
    () => FoodsHandMadeIngredientType,
    (foodsHandMadeIngredientTypes) =>
      foodsHandMadeIngredientTypes.foodsHandMade,
  )
  foodsHandMadeIngredientTypes: FoodsHandMadeIngredientType[];
}

export { FoodsHandMade };
