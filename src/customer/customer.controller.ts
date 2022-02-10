import { Controller, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerServices: CustomerService) {}

  @Post()
  postCustomer() {
    return this.customerServices.costumers;
  }
}
