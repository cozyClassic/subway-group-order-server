import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import {
  MenusController,
  IngredientTypeController,
  IngredientController,
  FoodsHandMadeController,
} from './menus.controller';

import { Menu } from './entities/menu.entity';
import { MenusService } from './menus.service';

import { IngredientType } from './entities/ingredientType.entity';
import { IngredientTypeService } from './menus.service';

import { Ingredient } from './entities/ingredient.entity';
import { IngredientService } from './menus.service';

import { Merchandise } from './entities/merchandise.entity';

import { FoodsHandMade } from './entities/foodsHandMade.entity';
import { FoodsHandMadeService } from './menus.service';

import { FoodsHandMadeIngredientType } from './entities/foodsHandMadeIngredientType.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Menu,
      IngredientType,
      Ingredient,
      FoodsHandMade,
      Merchandise,
      FoodsHandMadeIngredientType,
    ]),
  ],
  controllers: [
    MenusController,
    IngredientTypeController,
    IngredientController,
    FoodsHandMadeController,
  ],
  providers: [
    MenusService,
    IngredientTypeService,
    IngredientService,
    FoodsHandMadeService,
  ],
})
export class MenusModule {}
