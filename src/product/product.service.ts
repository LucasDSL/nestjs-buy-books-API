import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../entities/products.entity';
import { CreateProductDto } from './dto/createProduct-dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {}

  async addNew(product: CreateProductDto): Promise<Products> {
    const productCreated = await this.productRepository.create(product);
    await this.productRepository.save(product);
    return productCreated;
  }

  findAll(): Promise<Products[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Products> {
    return this.productRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
