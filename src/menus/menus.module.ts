import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { IngredientTypeService } from './menus.service';

@Module({
  controllers: [MenusController],
  providers: [MenusService, IngredientTypeService],
})
export class MenusModule {}
