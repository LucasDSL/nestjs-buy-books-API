import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../entities/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private usersRepository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Products> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
