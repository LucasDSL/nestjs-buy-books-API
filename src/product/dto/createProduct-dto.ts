import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  author: string;

  @IsNumber()
  price: number;

  @IsNumber()
  onStock: number;
}
