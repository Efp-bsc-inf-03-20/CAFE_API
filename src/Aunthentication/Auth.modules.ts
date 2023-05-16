import { Module } from "@nestjs/common";
import { AuthService } from "./Authservice";


@Module({
  imports: [AuthService],
  controllers: [],
  providers: [],
})
export class AppModule {}
