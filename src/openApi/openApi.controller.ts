import { Body, Controller, Get, Param } from '@nestjs/common';
import { OpenApiService } from './openApi.service';
import { OpenApiRepository } from './openApi.repository';
import { OpenApiAddrDto, OpenApiGPSDto, OpenApiInfoDto } from './dto/openAPI.request.dto'

@Controller('api')
export class OpenApiController {
  constructor(private readonly apiRepository: OpenApiRepository) {}

  @Get('hosAddr')
  async getAddrData(@Body()body:OpenApiAddrDto) {
    return await this.apiRepository.addrFetchData(body);
  }

  @Get('hosNearBy')
  async getGPSData(@Body()body:OpenApiGPSDto) {
    return await this.apiRepository.gpsFetchData(body);
  }

  @Get('hpid/:hpid')
  async getInfoData(@Param()param:OpenApiInfoDto){
    return await this.apiRepository.infoFetchData(param);
  }
}