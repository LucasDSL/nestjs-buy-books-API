import { Body, Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerServices: CustomerService) {}

  @Post()
  create(@Body() body: object) {
    return body;
  }
}
