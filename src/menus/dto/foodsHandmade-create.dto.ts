import { IsString, IsOptional } from 'class-validator';

export class FoodsHandMadeCreateDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  photo: string;
}
