// CafeA.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'cafeA'})
export class CafeA {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: string;

  @Column()
  foodType: string;

  @Column()
  phonenumber: string;

  @Column()
  location: string;

  @Column({default:new Date()})
  orderedAt: Date;
}
