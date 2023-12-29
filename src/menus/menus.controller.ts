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
import { CreateMenuDto } from './dto/menu-create.dto';
import { UpdateMenuDto } from './dto/menu-update.dto';

import { IngredientTypeService } from './menus.service';
import { IngredentTypeCreateDto } from './dto/ingredientType-create.dto';
import { IngredentTypeUpdateDto } from './dto/ingredientType-update.dto';

import { IngredientService } from './menus.service';
import { IngredentCreateDto } from './dto/ingredient-create.dto';

import { FoodsHandMadeService } from './menus.service';
import { FoodsHandMadeCreateDto } from './dto/foodsHandMade-create.dto';

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

@Controller('v1/ingredientType')
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

@Controller('v1/ingredient')
class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  async create(@Body() ingredientDto: IngredentCreateDto) {
    return this.ingredientService.create(ingredientDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() ingredientDto: IngredentCreateDto,
  ) {
    return this.ingredientService.update(+id, ingredientDto);
  }

  @Get()
  async findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ingredientService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ingredientService.remove(+id);
  }
}

@Controller('v1/foodsHandMade')
class FoodsHandMadeController {
  constructor(private readonly foodsHandMadeService: FoodsHandMadeService) {}

  @Post()
  async create(@Body() foodsHandMadeDto: FoodsHandMadeCreateDto) {
    return this.foodsHandMadeService.create(foodsHandMadeDto);
  }

  @Get()
  async findAll() {
    return this.foodsHandMadeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.foodsHandMadeService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() foodsHandMadeDto: FoodsHandMadeCreateDto,
  ) {
    return this.foodsHandMadeService.update(+id, foodsHandMadeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.foodsHandMadeService.remove(+id);
  }
}

export {
  MenusController,
  IngredientTypeController,
  IngredientController,
  FoodsHandMadeController,
};
