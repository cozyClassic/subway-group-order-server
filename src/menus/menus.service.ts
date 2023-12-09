import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuDto } from './dto/menu-create.dto';
import { UpdateMenuDto } from './dto/menu-update.dto';

import { IngredientType } from './entities/ingredientType.entity';
import { IngredentTypeCreateDto } from './dto/ingredientType-create.dto';
import { IngredentTypeUpdateDto } from './dto/ingredientType-update.dto';

import { Ingredient } from './entities/ingredient.entity';
import { IngredentCreateDto } from './dto/ingredient-create.dto';

@Injectable()
class MenusService {
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  findAll() {
    return `This action returns all menus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}

@Injectable()
class IngredientTypeService {
  constructor(
    @InjectRepository(IngredientType)
    private ingredientTypeRepo: Repository<IngredientType>,
  ) {}
  async create(ingredientTypeDto: IngredentTypeCreateDto) {
    const ingredientType: IngredientType =
      ingredientTypeDto.toIngredientTypeEntity();
    const result: IngredientType =
      await this.ingredientTypeRepo.save(ingredientType);
    return result;
  }

  async findAll() {
    const ingredientTypes: IngredientType[] =
      await this.ingredientTypeRepo.find();
    return ingredientTypes;
  }

  async findOne(id: number) {
    if (!id) return null;
    const ingredientType: IngredientType =
      await this.ingredientTypeRepo.findOne({
        where: { id },
      });
    return ingredientType;
  }

  async update(id: number, IngredentTypeUpdateDto: IngredentTypeUpdateDto) {
    if (!id) {
      throw new NotAcceptableException('not valid id');
    }
    const ingredientType: IngredientType =
      await this.ingredientTypeRepo.findOne({
        where: { id },
      });
    Object.assign(ingredientType, IngredentTypeUpdateDto);
    const result: IngredientType =
      await this.ingredientTypeRepo.save(ingredientType);
    return result;
  }

  async remove(id: number) {
    const ingredientType: IngredientType =
      await this.ingredientTypeRepo.findOne({
        where: {
          id,
        },
      });
    if (!ingredientType) {
      throw new NotFoundException('ingredient type is not found');
    }
    const result = await this.ingredientTypeRepo.softDelete(ingredientType);
    return result;
  }
}

@Injectable()
class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepo: Repository<Ingredient>,
  ) {}
  async create(ingredientDto: IngredentCreateDto) {
    const ingredient: Ingredient = ingredientDto.toIngredientEntity();

    const result: Ingredient = await this.ingredientRepo.save(ingredient);
    return result;
  }

  async findAll() {
    const ingredients: Ingredient[] = await this.ingredientRepo.find();
    return ingredients;
  }

  async findOne(id: number) {
    if (!id) return null;
    const ingredient: Ingredient = await this.ingredientRepo.findOne({
      where: { id },
    });
    return ingredient;
  }

  async update(id: number, ingredientDto: IngredentCreateDto) {
    if (!id) {
      throw new NotAcceptableException('not valid id');
    }
    const ingredient: Ingredient = await this.ingredientRepo.findOne({
      where: { id },
    });
    Object.assign(ingredient, ingredientDto);
    const result: Ingredient = await this.ingredientRepo.save(ingredient);
    return result;
  }

  async remove(id: number) {
    const ingredient: Ingredient = await this.ingredientRepo.findOne({
      where: {
        id,
      },
    });
    if (!ingredient) {
      throw new NotFoundException('ingredient is not found');
    }
    const result = await this.ingredientRepo.softDelete(ingredient);
    return result;
  }
}

export { MenusService, IngredientTypeService, IngredientService };
