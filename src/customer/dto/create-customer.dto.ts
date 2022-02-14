import { IsNumber, IsEmail, IsString } from 'class-validator';
export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  customerAddress: string;

  @IsNumber()
  cpf: number;

  @IsNumber()
  cellphone: number;
}
