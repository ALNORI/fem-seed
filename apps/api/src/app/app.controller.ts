import { Controller, Get } from '@nestjs/common';

import { Message } from '@controls2/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  public getProducts() {
    return this.appService.getProducts()
  }
  
}
