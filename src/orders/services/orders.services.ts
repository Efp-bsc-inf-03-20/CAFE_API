import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CafeA } from "src/typeorm/entities/CafeA";
import { CreateOrderparams } from "src/utils/types";
import { Repository } from "typeorm";


@Injectable()
export class ordersServices{

    constructor(@InjectRepository(CafeA) private cafeARepository:Repository<CafeA>,

    ){


    }
    getorders(){}

    createOrders(orderDetails:CreateOrderparams){
      const newOrder=this.cafeARepository.create({ 
  
} );
    }
    updateorders(){}
    deleteorders(){}
    

   
}