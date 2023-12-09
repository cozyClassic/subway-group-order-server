import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import {
  MenusController,
  IngredientTypeController,
  IngredientController,
} from './menus.controller';

import { Menu } from './entities/menu.entity';
import { MenusService } from './menus.service';

import { IngredientType } from './entities/ingredientType.entity';
import { IngredientTypeService } from './menus.service';

import { Ingredient } from './entities/ingredient.entity';
import { IngredientService } from './menus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, IngredientType, Ingredient])],
  controllers: [
    MenusController,
    IngredientTypeController,
    IngredientController,
  ],
  providers: [MenusService, IngredientTypeService, IngredientService],
})
export class MenusModule {}
