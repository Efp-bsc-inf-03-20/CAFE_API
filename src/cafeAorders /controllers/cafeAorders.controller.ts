import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateOrderDto } from "../dtos/CreateOrder.dto";
import { createcafeAOrdersServices } from "../services/cafeAorders.services";
import { ApiTags } from "@nestjs/swagger";
import { UpdateCafeADto } from "../dtos/UpdateCafe.dto";

@Controller('cafeAorders')
@ApiTags('cafe A orders')
export class cafeAordersController {
  constructor(private orderService: createcafeAOrdersServices) {}

  @Get()
  async findCafeAOrders() {
    const orders = await this.orderService.findCafeAOrders();
    return orders;
    
  }

  @Post()
  createOrders(@Body() createOrderDto: CreateOrderDto) {
    this.orderService.createCafeAOrders(createOrderDto);
  }

  @Put(':id')
  async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateCafeADto: UpdateCafeADto) {
    await this.orderService.updateCafeAOrder(id, updateCafeADto);
  }

  @Delete(':id')
  deleteCafeAorders(@Param('id', ParseIntPipe) id: number) {
    this.orderService.deleteOrderById(id);
  }
}
