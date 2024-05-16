import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('list/api')
  public async listApi() {
   return this.appService.listApi()
  }

  @Get('transactions/api')
  public async transactionsList() {
    return this.appService.transactionsList()
  }

}
