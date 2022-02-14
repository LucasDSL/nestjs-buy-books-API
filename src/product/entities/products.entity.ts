import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @Column()
  onStock: number;

  @Column({ type: 'timestamp', update: false })
  createAt: Date;

  @Column({ type: 'timestamp', update: true })
  updatedAt: Date;
}
