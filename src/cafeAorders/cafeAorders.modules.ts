import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { CafeA } from "src/typeorm/entities/CafeA";
import { CafeB } from "src/typeorm/entities/CAfeB";
import { UsersController } from "src/users/controllers/users/users.controller";
import { UsersService } from "src/users/services/users.services";
import { cafeAordersController } from "./controllers/cafeAorders.controller";
import { createcafeAOrdersServices } from "./services/cafeAorders.services";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, CafeA, CafeB]),
  ],
  controllers: [cafeAordersController,UsersController],
  providers: [UsersService,createcafeAOrdersServices],
})
export class CafeModule {}
