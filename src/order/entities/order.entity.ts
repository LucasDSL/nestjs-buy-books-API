import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Customers } from '../../customer/entities/customer.entity';
import { Products } from '../../product/entities/products.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Customers, { onDelete: 'CASCADE' })
  @JoinColumn()
  customer: Customers;

  @ManyToMany(() => Products)
  @JoinColumn()
  product: Products;

  @Column()
  quantity: number;
}
