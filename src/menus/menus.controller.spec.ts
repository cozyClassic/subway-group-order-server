import { Test, TestingModule } from '@nestjs/testing';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';

describe('MenusController', () => {
  let menuController: MenusController;
  let menuService: MenusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenusController],
      providers: [MenusService],
    }).compile();

    menuController = module.get<MenusController>(MenusController);
    menuService = module.get<MenusService>(MenusService);
  });

  it('should be defined', () => {
    expect(menuController).toBeDefined();
  });
});
