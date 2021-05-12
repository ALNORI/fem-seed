import { Injectable } from '@nestjs/common';
import { Message } from '@controls2/api-interfaces';
import { PrismaClient, Product } from '@prisma/client'
const prisma = new PrismaClient()
@Injectable()
export class AppService {

  public getProducts(): Promise<Product[]> {
    return prisma.product.findMany()
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
