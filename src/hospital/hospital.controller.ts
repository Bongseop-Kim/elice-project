import {
  Get,
  Body,
  Param,
  Delete,
  Controller,
  UseInterceptors,
  Query,
  Put,
} from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { HospitalEntity } from './entities/hospital.entity';
import { PutHospitalDto } from './dto/put-hospital.dto';

@Controller('hospital')
@ApiTags('Hospital')
@UseInterceptors(SuccessInterceptor)
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  @ApiOperation({ summary: '지역 별 병원 찾기' })
  @ApiCreatedResponse({ type: HospitalEntity })
  findAll(
    @Query('depth1') depth1: string,
    @Query('depth2') depth2: string,
    @Query('size') size: string,
    @Query('page') page: string,
    @Query('sort') sort: string,
  ) {
    return this.hospitalService.findAll(depth1, depth2, +size, +page, sort);
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 병원 찾기' })
  @ApiCreatedResponse({ type: HospitalEntity })
  findOne(@Param('id') id: string) {
    return this.hospitalService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '병원 수정' })
  @ApiCreatedResponse({ type: HospitalEntity })
  update(@Param('id') id: string, @Body() data: PutHospitalDto) {
    return this.hospitalService.put(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '병원 삭제' })
  @ApiCreatedResponse({ type: HospitalEntity })
  remove(@Param('id') id: string) {
    return this.hospitalService.remove(id);
  }
}
