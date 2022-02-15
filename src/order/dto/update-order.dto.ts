import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './orderFromCustomer.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
