import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(
    private readonly httpService: HttpService,
    private readonly appConfig: ConfigService,
  ) {}

  public async apiFindAll() {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${this.appConfig.get('URL_API')}/institutions/?page=1`,
          {
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
              Authorization:
                'Basic YmU5Y2M0MmItMzExNi00NmM1LWI0M2EtNzllMjkxZGMxMTRiOlhtU1R2NFYtaXM1STEtMVdlcmZOd19qOTI4TzFrQWZVN2tWR0BQZlBvSkJ3clRsYjFTQGVDOHFueGdJT2pAcDQ=',
            },
          },
        ),
      );

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async transactionsList() {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          '/transactions/?page=1&link=45e98d2e-39ad-42be-97e7-c2fd21c346a3',
          {
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
              Authorization:
                'Basic YmU5Y2M0MmItMzExNi00NmM1LWI0M2EtNzllMjkxZGMxMTRiOlhtU1R2NFYtaXM1STEtMVdlcmZOd19qOTI4TzFrQWZVN2tWR0BQZlBvSkJ3clRsYjFTQGVDOHFueGdJT2pAcDQ=',
            },
          },
        ),
      );

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
