import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './menu-create.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {}
