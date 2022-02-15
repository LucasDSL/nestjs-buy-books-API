import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderFromCustomerDto } from './dto/orderFromCustomer.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderFromCustomer: OrderFromCustomerDto) {
    return this.orderService.create(orderFromCustomer);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Get(':id/customer')
  findOrderWithCustomer(@Param('id') id: string) {
    return this.orderService.findOne(+id, 'customer');
  }

  @Get(':id/product')
  findOrderWithProduct(@Param('id') id: string) {
    return this.orderService.findOne(+id, 'product');
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
