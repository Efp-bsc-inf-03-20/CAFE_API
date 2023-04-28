import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/users.modules";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import {  User } from "./typeorm/entities/User";
import { CafeA } from "./typeorm/entities/CafeA";
import { CafeB } from "./typeorm/entities/CAfeB";




@Module({
  imports:[TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'1234',
    database:'mycafe',
    entities:[User,CafeA,CafeB],
    synchronize:true,

  }),UsersModule],
  controllers:[AppController],
  providers:[AppService]

})
export class AppModule{}