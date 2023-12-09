import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { IngredientTypeService } from './menus.service';
import { CreateMenuDto } from './dto/menu-create.dto';
import { UpdateMenuDto } from './dto/menu-update.dto';
import { IngredentTypeCreateDto } from './dto/ingredient-type-create.dto';
import { IngredentTypeUpdateDto } from './dto/ingredient-type-update.dto';

@Controller('menus')
class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menusService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.menusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menusService.remove(+id);
  }
}

@Controller('ingredientType')
class IngredientTypeController {
  constructor(private readonly ingredientTypeService: IngredientTypeService) {}
  @Post()
  async create(@Body() ingredientTypeDto: IngredentTypeCreateDto) {
    return this.ingredientTypeService.create(ingredientTypeDto);
  }

  @Get()
  async findAll() {
    return this.ingredientTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ingredientTypeService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() ingredientTypeDto: IngredentTypeUpdateDto,
  ) {
    return this.ingredientTypeService.update(+id, ingredientTypeDto);
  }
}

export { MenusController, IngredientTypeController };
