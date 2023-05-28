import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OpenApiController } from './openApi.controller';
import { OpenApiService } from './openApi.service';
import { OpenApiRepository } from './openApi.repository'

@Module({
  imports: [HttpModule],
  controllers: [OpenApiController],
  providers: [OpenApiRepository],
  exports: [OpenApiRepository]
})
export class OpenApiModule {}
