import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderFromCustomerDto } from './dto/orderFromCustomer.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Orders } from './entities/order.entity';
import { Customers } from '../customer/entities/customer.entity';
import { Products } from '../product/entities/products.entity';
import { CustomerService } from 'src/customer/customer.service';
import { ProductService } from 'src/product/product.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    private readonly customerService: CustomerService,
    private readonly productService: ProductService,
  ) {}

  async create(orderFromCustomerDto: OrderFromCustomerDto) {
    const [customer, product] =
      await this.validateOrderAndUpdateProductQuantity(orderFromCustomerDto);

    const orderDto = new CreateOrderDto();
    orderDto.customerId = customer;
    orderDto.productId = product;
    orderDto.quantity = orderFromCustomerDto.quantity;
    const order = await this.ordersRepository.create(orderDto);

    await this.ordersRepository.save(order);
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  async validateOrderAndUpdateProductQuantity(
    orderFromCustomerDto: OrderFromCustomerDto,
  ): Promise<[Customers, Products]> {
    const customer = await this.customerService.findOneById(
      orderFromCustomerDto.customerId,
    );
    if (!customer) {
      throw new Error('Cliente não encontrado');
    }

    const product = await this.productService.findOne(
      orderFromCustomerDto.productId,
    );
    if (!product) {
      throw new Error('Produto não encontrado');
    }

    if (product.onStock <= orderFromCustomerDto.quantity) {
      const newProductQuantity =
        orderFromCustomerDto.quantity - product.onStock;
      await this.productService.update(product.id, newProductQuantity);
    }
    return [customer, product];
  }
}
