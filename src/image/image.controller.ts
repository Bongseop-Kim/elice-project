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
  NotFoundException,
  UploadedFiles,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { ImageEntity } from './entities/image.entity';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.filter';
import { InputImageDto } from './dto/input-image.dto';
import { HospitalService } from 'src/hospital/hospital.service';

async function checkHospitalExistence(
  hospitalService: HospitalService,
  hospitalId: string,
): Promise<void> {
  const existHospital = await hospitalService.existHospital(hospitalId);
  if (!existHospital) {
    throw new NotFoundException(
      '일치하는 병원이 없습니다. HospitalId를 확인해주세요.',
    );
  }
}

@Controller('image')
@ApiTags('Image')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly hospitalService: HospitalService,
  ) {}

  @Post()
  @ApiOperation({ summary: '이미지 업로드' })
  @ApiResponse({ type: ImageEntity })
  @UseInterceptors(FilesInterceptor('files', 10))
  async upload(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image' })],
      }),
    )
    files: [Express.Multer.File],
    @Body() data: InputImageDto,
  ) {
    await checkHospitalExistence(this.hospitalService, data.hospitalId);
    files.map(async (file) => {
      return await this.imageService.upload(
        file.buffer,
        data.hospitalId,
        +data.kidId,
      );
    });
  }

  @Get('hospital/:hospitalId')
  @ApiOperation({ summary: '병원의 모든 이미지' })
  @ApiResponse({ type: [ImageEntity] })
  async findByHospitalId(@Param('hospitalId') hospitalId: string) {
    await checkHospitalExistence(this.hospitalService, hospitalId);
    return this.imageService.findByHospitalId(hospitalId);
  }

  @Get('kid/:kidId')
  @ApiOperation({ summary: '아이 이미지 하나' })
  @ApiResponse({ type: ImageEntity })
  findByKidId(@Param('kidId') kidId: string) {
    return this.imageService.findByKidId(+kidId);
  }

  @Delete(':id')
  @ApiOperation({ summary: '이미지 삭제하기' })
  @ApiResponse({ type: ImageEntity })
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
