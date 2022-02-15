import { Customers } from 'src/customer/entities/customer.entity';
import { Products } from 'src/product/entities/products.entity';

export class CreateOrderDto {
  customerId: Customers;
  productId: Products;
  quantity: number;
}
