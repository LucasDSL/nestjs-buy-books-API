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

  private async encryptPassword(password) {
    const rounds = 12;
    const hashedPW = await hash(password, rounds);
    return hashedPW;
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customers> {
    createCustomerDto.password = await this.encryptPassword(
      createCustomerDto.password,
    );
    const customer = this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(customer);
  }

  async findAll(): Promise<Customers[]> {
    return this.customerRepository.find();
  }

  async findOneByName(name: string): Promise<Customers> {
    return this.customerRepository.findOne({
      name: name,
    });
  }

  async findOneById(id: number) {
    const customer = await this.customerRepository.findOne({
      id: id,
    });
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    if (!this.findOneById(id)) {
      throw new Error('Customer not found');
    }

    if (updateCustomerDto.password) {
      updateCustomerDto.password = await this.encryptPassword(
        updateCustomerDto.password,
      );
    }
    return this.customerRepository.update({ id: id }, updateCustomerDto);
  }

  async remove(id: number): Promise<Customers> {
    const customer = await this.findOneById(id);
    return this.customerRepository.remove(customer);
  }
}
