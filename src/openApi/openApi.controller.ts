import { Controller, Get } from '@nestjs/common';
import { OpenApiService } from './openApi.service';

@Controller('api')
export class OpenApiController {
  constructor(private readonly apiService: OpenApiService) {}

  @Get('data')
  async getData(): Promise<any> {
    const data = await this.apiService.fetchData();
    return data;
  }
}