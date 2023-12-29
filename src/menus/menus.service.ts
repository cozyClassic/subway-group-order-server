import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuDto } from './dto/menu-create.dto';
import { UpdateMenuDto } from './dto/menu-update.dto';

import { IngredientType } from './entities/ingredientType.entity';
import { IngredentTypeCreateDto } from './dto/ingredientType-create.dto';
import { IngredentTypeUpdateDto } from './dto/ingredientType-update.dto';

import { Ingredient } from './entities/ingredient.entity';
import { IngredentCreateDto } from './dto/ingredient-create.dto';

import { Merchandise } from './entities/merchandise.entity';

import { FoodsHandMade } from './entities/foodsHandMade.entity';
import { FoodsHandMadeCreateDto } from './dto/foodsHandMade-create.dto';
import { FoodsHandMadeUpdateDto } from './dto/foodsHandMade-update.dto';

import { FoodsHandMadeIngredientType } from './entities/foodsHandMadeIngredientType.entity';
import { FoodsHandMadeIngredientTypeCreateDto } from './dto/foodsHandMadeIngredientType-create.dto';

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
    const result = await this.ingredientTypeRepo.softDelete(ingredientType.id);
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
    const result = await this.ingredientRepo.softDelete(ingredient.id);
    return result;
  }
}

@Injectable()
class MerchandiseService {
  constructor(
    @InjectRepository(Merchandise)
    private merchandiseRepo: Repository<Merchandise>,
  ) {}

  async create(dbType: string) {
    const merchandise: Merchandise = new Merchandise();
    merchandise.dbType = dbType;
    const result: Merchandise = await this.merchandiseRepo.save(merchandise);
    return result;
  }

  async remove(id: number) {
    const merchandise: Merchandise = await this.merchandiseRepo.findOne({
      where: {
        id,
      },
    });
    if (!merchandise) {
      throw new NotFoundException('merchandise is not found');
    }
    const result = await this.merchandiseRepo.softDelete(merchandise.id);
    return result;
  }
}

@Injectable()
class FoodsHandMadeIngredientTypeService {
  constructor(
    @InjectRepository(FoodsHandMadeIngredientType)
    private foodsHandMadeIngredientTypeRepo: Repository<FoodsHandMadeIngredientType>,
  ) {}

  async create({
    foodsHandMade,
    foodsHandMadeIngredientTypeDto,
  }: {
    foodsHandMade: FoodsHandMade;
    foodsHandMadeIngredientTypeDto: FoodsHandMadeIngredientTypeCreateDto;
  }) {
    try {
      const foodsHandMadeIngredientType: FoodsHandMadeIngredientType =
        new FoodsHandMadeIngredientType();
      foodsHandMadeIngredientType.foodsHandMade = foodsHandMade;
      foodsHandMadeIngredientType.isRequired =
        foodsHandMadeIngredientTypeDto.isRequired;
      foodsHandMadeIngredientType.isMultiple =
        foodsHandMadeIngredientTypeDto.isMultiple;
      foodsHandMadeIngredientType.defaultIngredientId =
        foodsHandMadeIngredientTypeDto.defaultIngredientId;
      foodsHandMadeIngredientType.selectableIngredientIds =
        foodsHandMadeIngredientTypeDto.selectableIngredientIds;
      const result: FoodsHandMadeIngredientType =
        await this.foodsHandMadeIngredientTypeRepo.save(
          foodsHandMadeIngredientType,
        );
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

@Injectable()
class FoodsHandMadeService {
  constructor(
    @InjectRepository(FoodsHandMade)
    private foodsHandMadeRepo: Repository<FoodsHandMade>,
    private dataSource: DataSource,
    private merchandiseService: MerchandiseService,
    private foodsHandMadeIngredientTypeService: FoodsHandMadeIngredientTypeService,
  ) {}

  async create(foodsHandMadeDto: FoodsHandMadeCreateDto) {
    // I want to make tranasction
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let result;

    try {
      // create merchandise
      const dbType: string = Merchandise.getDbTypes.foodsHandMade;
      const merchandiseResult = await this.merchandiseService.create(dbType);

      const foodsHandMade: FoodsHandMade = new FoodsHandMade();
      foodsHandMade.id = merchandiseResult.id;
      foodsHandMade.name = foodsHandMadeDto.name;
      foodsHandMade.photo = foodsHandMadeDto.photo;
      result = await queryRunner.manager.save(foodsHandMade);
      if (foodsHandMadeDto.ingredientTypes) {
        await this.foodsHandMadeIngredientTypeService.create({
          foodsHandMade,
          foodsHandMadeIngredientTypeDto: foodsHandMadeDto.ingredientTypes,
        });
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return result;
  }

  async findAll() {
    const foodsHandMades: FoodsHandMade[] = await this.foodsHandMadeRepo.find();
    return foodsHandMades;
  }

  async findOne(id: number) {
    if (!id) return null;
    const foodsHandMade: FoodsHandMade = await this.foodsHandMadeRepo.findOne({
      where: { id },
    });
    return foodsHandMade;
  }

  async update(id: number, foodsHandMadeDto: FoodsHandMadeUpdateDto) {
    if (!id) {
      throw new NotAcceptableException('not valid id');
    }
    const foodsHandMade: FoodsHandMade = await this.foodsHandMadeRepo.findOne({
      where: { id },
    });
    Object.assign(foodsHandMade, foodsHandMadeDto);
    const result: FoodsHandMade =
      await this.foodsHandMadeRepo.save(foodsHandMade);
    return result;
  }

  async remove(id: number) {
    const foodsHandMade: FoodsHandMade = await this.foodsHandMadeRepo.findOne({
      where: {
        id,
      },
    });
    if (!foodsHandMade) {
      throw new NotFoundException('foodsHandMade is not found');
    }
    await this.merchandiseService.remove(id);
    const result = await this.foodsHandMadeRepo.softDelete(id);
    return result;
  }
}

export {
  MenusService,
  IngredientTypeService,
  IngredientService,
  FoodsHandMadeService,
};
