import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { IngredientTypeService } from './menus.service';
import { IngredientType } from './entities/handMadeFood/ingredientType.entity';
import { Menu } from './entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu, IngredientType])],
  controllers: [MenusController],
  providers: [MenusService, IngredientTypeService],
})
export class MenusModule {}
