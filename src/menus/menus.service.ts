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
import { IngredentTypeCreateDto } from './dto/ingredient-type-create.dto';
import { IngredentTypeUpdateDto } from './dto/ingredient-type-update.dto';

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

export { MenusService, IngredientTypeService };
