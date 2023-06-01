import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateOrderDto } from "../dtos/CreateOrder.dto";
import { createcafeAOrdersServices } from "../services/cafeAorders.services";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UpdateCafeADto } from "../dtos/UpdateCafe.dto";

@Controller('cafeAorders')
@ApiTags('Cafe A Orders')
export class cafeAordersController {
  constructor(private orderService: createcafeAOrdersServices) {}

  @Get()
  @ApiOperation({ summary: 'Get Cafe A Orders' })
  @ApiResponse({ status: 200, description: 'Successful response' })
  async findCafeAOrders() {
    const orders = await this.orderService.findCafeAOrders();
    return orders;
  }

  @Post()
  @ApiOperation({ summary: 'Create Cafe A Order' })
  @ApiResponse({ status: 201, description: 'Order created successfully' })
  createOrders(@Body() createOrderDto: CreateOrderDto) {
    this.orderService.createCafeAOrders(createOrderDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Cafe A Order by ID' })
  @ApiResponse({ status: 200, description: 'Order updated successfully' })
  async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateCafeADto: UpdateCafeADto) {
    await this.orderService.updateCafeAOrder(id, updateCafeADto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Cafe A Order by ID' })
  @ApiResponse({ status: 204, description: 'Order deleted successfully' })
  deleteCafeAorders(@Param('id', ParseIntPipe) id: number) {
    this.orderService.deleteOrderById(id);
  }
}
