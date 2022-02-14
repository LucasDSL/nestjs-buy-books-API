import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customers } from './entities/customer.entity';
import { hash } from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customers)
    private customerRepository: Repository<Customers>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    createCustomerDto.password = await hash(createCustomerDto.password, 12);
    const customer = await this.customerRepository.create(createCustomerDto);
    await this.customerRepository.save(customer);
    return { status: 'success', message: 'customer created' };
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
