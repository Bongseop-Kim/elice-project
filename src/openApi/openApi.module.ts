import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OpenApiController } from './openApi.controller';
import { OpenApiService } from './openApi.service';

@Module({
  imports: [HttpModule],
  controllers: [OpenApiController],
  providers: [OpenApiService],
})
export class OpenApiModule {}
