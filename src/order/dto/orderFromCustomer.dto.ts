import { IsNumber, IsString } from 'class-validator';
export class OrderFromCustomerDto {
  @IsNumber()
  productId: number;
  @IsNumber()
  customerId: number;
  @IsNumber()
  quantity: number;
}
