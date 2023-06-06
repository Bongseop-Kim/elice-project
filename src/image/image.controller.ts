import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  UseFilters,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageEntity } from './entities/image.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';
import { InputImageDto } from './dto/input-image.dto';

@Controller('image')
@ApiTags('Image')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  @ApiOperation({ summary: '이미지 업로드' })
  @ApiResponse({ type: ImageEntity })
  @UseInterceptors(FileInterceptor('file'))
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image/jpeg' })],
      }),
    )
    file: Express.Multer.File,
    @Body() data: InputImageDto,
  ) {
    return this.imageService.upload(
      file.originalname,
      file.buffer,
      data.hospitalId,
      +data.kidId,
    );
  }

  @Get('hospital/:id')
  @ApiOperation({ summary: '병원의 모든 이미지' })
  @ApiResponse({ type: ImageEntity })
  findByHospitalId(@Param('id') id: string) {
    return this.imageService.findByHospitalId(id);
  }

  @Get('kid/:id')
  @ApiOperation({ summary: '아이 이미지 하나' })
  @ApiResponse({ type: ImageEntity })
  findByKidId(@Param('id') id: string) {
    return this.imageService.findByKidId(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '이미지 변경' })
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
