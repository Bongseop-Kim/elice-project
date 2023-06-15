import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  ParseFilePipe,
  FileTypeValidator,
  NotFoundException,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { ImageService } from './image.service';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { ImageEntity } from './entities/image.entity';
import { FilesInterceptor } from '@nestjs/platform-express';
import { InputImageDto } from './dto/input-image.dto';
import { HospitalService } from 'src/hospital/hospital.service';

async function checkHospitalExistence(
  hospitalService: HospitalService,
  hospitalId: string,
): Promise<void> {
  const hospital = await hospitalService.findById(hospitalId);
  if (!hospital) {
    throw new NotFoundException(
      '일치하는 병원이 없습니다. HospitalId를 확인해주세요.',
    );
  }
}

@ApiTags('Image')
@Controller('image')
@UseInterceptors(SuccessInterceptor)
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly hospitalService: HospitalService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '이미지 업로드 hospitalId, kidId는 둘 중에 하나만 들어와야합니다.',
  })
  @ApiResponse({ type: ImageEntity })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('files', 10))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        hospitalId: {
          type: 'string',
        },
        kidId: {
          type: 'string',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async upload(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image' })],
      }),
    )
    files: [Express.Multer.File],
    @Body() data: InputImageDto,
  ) {
    if (data.hospitalId && data.kidId) {
      throw new BadRequestException(
        '병원 또는 유저 ID 둘 중 하나만 와야합니다.',
      );
    }
    if (data.hospitalId) {
      await checkHospitalExistence(this.hospitalService, data.hospitalId);
    }

    const reservations = await Promise.all(
      files.map(async (file) => {
        return await this.imageService.upload(
          file.buffer,
          file.originalname,
          data.hospitalId,
          +data.kidId,
        );
      }),
    );

    return reservations;
    // await는 단일 프로미스를 기다리는 데 사용되며, 여러 개의 비동기 작업을 동시에 처리하려면 Promise.all을 사용해야 합니다.
    // await는 단일 프로미스를 기다릴 때 사용되므로, 반복문 내에서 순차적으로 await를 사용하면 각 파일 업로드 작업이 순차적으로 수행되기 때문에 병렬로 처리되지 않습니다. 즉, 첫 번째 파일 업로드가 완료될 때까지 기다리고, 그 다음 파일 업로드가 시작됩니다. 이는 비효율적인 동작입니다.
    // 반면에, Promise.all은 여러 개의 프로미스를 동시에 실행하고 모든 프로미스가 완료될 때까지 기다릴 수 있는 기능을 제공합니다. Promise.all은 배열로 전달된 프로미스들이 모두 이행될 때까지 기다렸다가, 모든 프로미스의 결과를 반환하는 새로운 프로미스를 반환합니다.
    // 이를 통해 병렬로 여러 개의 파일 업로드 작업을 실행할 수 있습니다.
    // 따라서, 여러 개의 파일을 병렬로 업로드하고 모든 예약을 반환하려면 Promise.all과 await를 함께 사용해야 합니다. Promise.all을 사용하여 병렬 실행을 처리하고, await를 사용하여 모든 파일 업로드 작업이 완료될 때까지 기다린 후에 예약을 반환할 수 있습니다.
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
