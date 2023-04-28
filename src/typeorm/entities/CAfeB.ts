// CafeB.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'cafeB'})
export class CafeB {
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
