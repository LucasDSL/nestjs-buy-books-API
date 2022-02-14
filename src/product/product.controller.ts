import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/creat-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async addNew(@Body() createPeoductDto: CreateProductDto) {
    return await this.productService.addNew(createPeoductDto);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }
}
