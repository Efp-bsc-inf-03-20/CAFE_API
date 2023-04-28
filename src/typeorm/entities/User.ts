import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
     email:string;

    @Column()
    password:string;

    @Column()
    createdAt:Date;

    @Column({nullable:true})
    authstrategy:string;

}
/*
@Entity({name:'cafeA'})
export class CAFE_A{
    @PrimaryGeneratedColumn()
    order_ID:number;

    @Column({unique:true})
    Food_Type:string;

    @Column()
     phone_number:string;

    @Column()
    Location:string;

    @Column({default:new Date()})
    Order_Date:Date;


}
@Entity({name:'cafeB'})
export class CAFE_B{
    @PrimaryGeneratedColumn()
    order_ID:number;

    @Column({unique:true})
    Food_Type:string;

    @Column()
     phone_number:string;

    @Column()
    Location:string;

    @Column({default:new Date()})
    Order_Date:Date;


}
*/