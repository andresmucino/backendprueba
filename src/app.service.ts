import { Injectable } from '@nestjs/common';
import { HttpCustomService } from './providers/http/http-custom.service';

@Injectable()
export class AppService {
  constructor(private readonly httpSevice: HttpCustomService) {}
  getHello(): string {
    return 'Hello World!';
  }

  public async listApi() {
    return this.httpSevice.apiFindAll();
  }

  public async transactionsList() {
    return this.httpSevice.transactionsList();
  }

  

}
