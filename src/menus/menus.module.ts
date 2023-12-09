import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController, IngredientTypeController } from './menus.controller';
import { IngredientTypeService } from './menus.service';
import { IngredientType } from './entities/ingredientType.entity';
import { Menu } from './entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, IngredientType])],
  controllers: [MenusController, IngredientTypeController],
  providers: [MenusService, IngredientTypeService],
})
export class MenusModule {}
