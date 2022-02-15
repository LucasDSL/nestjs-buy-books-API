import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { CreateProductDto } from './dto/creat-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addNew(@Body() createPeoductDto: CreateProductDto) {
    return this.productService.addNew(createPeoductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

}
