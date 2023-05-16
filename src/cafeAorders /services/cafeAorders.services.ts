import { Delete, Get, Injectable, Param, ParseIntPipe, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CafeA } from "src/typeorm/entities/CafeA";
import { Repository } from "typeorm";
import { CreateOrderParams, UpdateOrderparams } from "../utils/types";

@Injectable()
export class createcafeAOrdersServices {
  constructor(@InjectRepository(CafeA) private CafeARepository: Repository<CafeA>) {}

  async findCafeAOrders(): Promise<CafeA[]> {
    return this.CafeARepository.find();
  }

  async createCafeAOrders(OrderDetails: CreateOrderParams): Promise<void> {
    const newOrder = this.CafeARepository.create({
      ...OrderDetails,
      orderedAt: new Date(),
    });
    await this.CafeARepository.save(newOrder);
  }

  async countOrders(): Promise<number> {
    return this.CafeARepository.count();
  }

  async updateCafeAOrder(id: number, updatecafeADetails: UpdateOrderparams): Promise<void> {
    await this.CafeARepository.update(id, updatecafeADetails);
  }

  async deleteOrderById(id: number): Promise<void> {
    await this.CafeARepository.delete(id);
  }
}
