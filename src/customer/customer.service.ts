import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  public costumers = [
    {
      name: 'lucas',
    },
    {
      name2: 'lcas2',
    },
  ];

  findAll(): object[] {
    return this.costumers;
  }
}
