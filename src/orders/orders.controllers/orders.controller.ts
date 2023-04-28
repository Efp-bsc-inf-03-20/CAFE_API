import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CreateCafeAOrderDto } from "../dtos/CreateCafeAOrder.dto";
import { ordersServices } from "../services/orders.services";
;


@Controller("orders")
export class OrdersController{

    constructor(private orderService:ordersServices){}
    @Post()
    createOrders(@Body() createCafeAOrderDto:CreateCafeAOrderDto){
      
    }

 
    @Get()
    getorders(){}

    @Put()
    updateorders(){}

    @Delete()
    deleteorders(){}

}