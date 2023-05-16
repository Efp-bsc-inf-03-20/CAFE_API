import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UpdateCafeBDto } from "../dtos/UpdateCafeB.dto";
import { createcafeBOrdersServices } from "../services/cafeBorders.services";
import { CafeBOrderDto } from "../dtos/CreateBorders.dto";

@Controller('cafeBorders')
@ApiTags('cafe B orders')
export class cafeBordersController {
  constructor(private orderService: createcafeBOrdersServices) {}

  @Get()
  async findCafeBOrders() {
    const orders = await this.orderService.findCafeBOrders();
    return orders;
  }

  @Post()
  createCafeBOrders(@Body() createCafeBOrderDto: CafeBOrderDto) {
    this.orderService.createCafeBOrders(createCafeBOrderDto);
  }
  
  @Put(':id')
  async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateCafeBDto: UpdateCafeBDto) {
    await this.orderService.updateCafeAOrder(id, updateCafeBDto);
  }

  @Delete(':id')
  deleteCafeBorders(@Param('id', ParseIntPipe) id: number) {
    this.orderService.deleteOrderById(id);
  }
}
