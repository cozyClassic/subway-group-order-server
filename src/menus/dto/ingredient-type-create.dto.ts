import { IsString } from 'class-validator';
export class IngredentTypeCreateDto {
  @IsString()
  name: string;
}
