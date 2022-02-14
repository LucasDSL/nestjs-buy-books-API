import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import { IsEmail, IsString, IsNumber } from 'class-validator';
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsString()
  name?: string;

  @IsString()
  password?: string;

  @IsString()
  @IsEmail()
  email?: string;

  @IsString()
  customerAddress?: string;

  @IsNumber()
  cellphone?: number;
}
