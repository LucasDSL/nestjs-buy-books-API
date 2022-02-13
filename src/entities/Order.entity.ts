import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { Customers } from './Customer.entity';
import { Products } from './products.entity';

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
