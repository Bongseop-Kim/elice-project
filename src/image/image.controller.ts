import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageEntity } from './entities/image.entity';

@Controller('image')
@ApiTags('Image')
@UseInterceptors(SuccessInterceptor)
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @ApiOperation({ summary: '이미지 업로드' })
  @ApiResponse({ type: ImageEntity })
  create(@Body() body: CreateImageDto) {
    return this.imageService.create(body);
  }

  @Get('hospital/:id')
  @ApiOperation({ summary: '모든 병원 이미지' })
  @ApiResponse({ type: ImageEntity })
  findByHospitalId(@Param('id') id: string) {
    return this.imageService.findByHospitalId(id);
  }

  @Get('child/:id')
  @ApiOperation({ summary: '모든 아이 이미지' })
  @ApiResponse({ type: ImageEntity })
  findByChildId(@Param('id') id: string) {
    // return this.imageService.findByHospitalId(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '이미지 수정' })
  @ApiResponse({ type: ImageEntity })
  update(@Param('id') id: string, @Body() body: UpdateImageDto) {
    return this.imageService.update(+id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: '이미지 삭제하기' })
  @ApiResponse({ type: ImageEntity })
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
