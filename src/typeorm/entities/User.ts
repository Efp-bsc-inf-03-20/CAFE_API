import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, getRepository } from "typeorm";

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

 

}
