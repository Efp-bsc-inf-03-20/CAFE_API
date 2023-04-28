import {  Module } from "@nestjs/common";
import { UsersController } from "./controllers/users/users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { UsersService } from "./services/users.services";
import { CafeA } from "src/typeorm/entities/CafeA";
import { CafeB } from "src/typeorm/entities/CAfeB";
import { OrdersController } from "src/orders/orders.controllers/orders.controller";
import { ordersServices } from "src/orders/services/orders.services";



@Module({
    imports:[TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([CafeA]),TypeOrmModule.forFeature([CafeB])],
    controllers:[UsersController,OrdersController],
    providers:[UsersService,ordersServices]


})
export class UsersModule{}