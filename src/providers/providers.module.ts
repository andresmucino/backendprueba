import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpCustomService } from './http/http-custom.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [HttpCustomService],
  exports: [HttpCustomService],
})
export class ProvidersModule {}
