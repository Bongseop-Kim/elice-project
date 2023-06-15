import {
  Get,
  Body,
  Param,
  Delete,
  Controller,
  UseInterceptors,
  Query,
  Put,
  Post,
  NotFoundException,
  UploadedFiles,
  ParseFilePipe,
  FileTypeValidator,
  UseGuards,
  HttpException,
} from '@nestjs/common';
import { HospitalService } from './hospital.service';
import {
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/common/interceptor/success.interceptor';
import { HospitalEntity } from './entities/hospital.entity';
import { PutHospitalDto } from './dto/put-hospital.dto';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { ImageService } from 'src/image/image.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { UserEntity } from 'src/users/entities/users.entity';

async function checkHospitalExistence(
  hospitalService: HospitalService,
  hospitalId: string,
) {
  const hospital = await hospitalService.findById(hospitalId);
  if (!hospital) {
    throw new NotFoundException(
      '일치하는 병원이 없습니다. HospitalId를 확인해주세요.',
    );
  }
  return hospital;
}

@Controller('hospital')
@ApiTags('Hospital')
@UseInterceptors(SuccessInterceptor)
export class HospitalController {
  constructor(
    private readonly hospitalService: HospitalService,
    private readonly imageService: ImageService,
  ) {}

  @Post()
  @ApiOperation({ summary: '신규 병원 등록' })
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ type: HospitalEntity })
  @UseInterceptors(FilesInterceptor('files', 10))
  async create(
    @Body() data: CreateHospitalDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image' })],
      }),
    )
    files: [Express.Multer.File],
  ) {
    const hospital = await this.hospitalService.create(data);
    await Promise.all(
      files.map(async (file) => {
        return await this.imageService.upload(
          file.buffer,
          file.originalname,
          hospital.id,
          null,
        );
      }),
    );
    return await this.hospitalService.findById(hospital.id);
  }

  @Get('all')
  findEverything() {
    return this.hospitalService.findEverything();
  }

  @Get()
  @ApiOperation({ summary: '지역 별 병원 찾기' })
  @ApiQuery({ name: 'depth1', required: false })
  @ApiQuery({ name: 'depth2', required: false })
  @ApiQuery({ name: 'sort', required: false })
  @ApiCreatedResponse({ type: HospitalEntity })
  findAll(
    @Query('depth1') depth1: string,
    @Query('depth2') depth2: string,
    @Query('size') size: string,
    @Query('page') page: string,
    @Query('sort') sort: string,
    @Query('dutyName') dutyName: string,
  ) {
    return this.hospitalService.findAll(
      depth1,
      depth2,
      +size,
      +page,
      sort,
      dutyName,
    );
  }

  //쓰는곳 있나?
  @Get('hospitalName/:hospitalName')
  @ApiOperation({ summary: '이름으로 병원 찾기' })
  @ApiCreatedResponse({ type: HospitalEntity })
  findByName(@Param('hospitalName') hospitalName: string) {
    return this.hospitalService.findByName(hospitalName);
  }

  @Get('hp10/:hospitalName')
  @ApiQuery({ name: 'page', required: true })
  @ApiQuery({ name: 'size', required: true })
  @ApiOperation({ summary: '이름으로 병원 찾기 10개' })
  @ApiCreatedResponse({ type: [HospitalEntity] })
  findByNameTen(
    @Query('size') size: string,
    @Query('page') page: string,
    @Param('hospitalName') hospitalName: string,
  ) {
    return this.hospitalService.findByNameTen(+size, +page, hospitalName);
  }

  @Get('near')
  @ApiOperation({
    summary: '가까운 병원 9개 찾기, 유저의 경도,위도,반경 r를 넣어주세요.',
  })
  @ApiCreatedResponse({ type: HospitalEntity })
  findByDistance(
    @Query('userLat') userLat: number,
    @Query('userLon') userLon: number,
    @Query('r') r: number,
  ) {
    return this.hospitalService.findByDistance(userLat, userLon, r);
  }

  @Get('user')
  @ApiOperation({ summary: '병원 매니저의 병원 찾기' })
  @UseGuards(JwtAuthGuard)
  async findByUser(@CurrentUser() user: UserEntity) {
    if (!user.hospitalId) {
      throw new HttpException('등륵되지 않은 관리자입니다.', 401);
    }
    return this.hospitalService.findById(user.hospitalId);
  }

  @Get(':hospitalId')
  @ApiOperation({ summary: '특정 병원 찾기' })
  @ApiCreatedResponse({ type: HospitalEntity })
  async findById(@Param('hospitalId') hospitalId: string) {
    await checkHospitalExistence(this.hospitalService, hospitalId);
    return this.hospitalService.findById(hospitalId);
  }

  @Put(':hospitalId')
  @ApiOperation({ summary: '병원 수정' })
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ type: HospitalEntity })
  @UseInterceptors(FilesInterceptor('files', 10))
  async update(
    @Param('hospitalId') hospitalId: string,
    @Body() data: PutHospitalDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'image' })],
      }),
    )
    files: [Express.Multer.File],
  ) {
    const hospital = await checkHospitalExistence(
      this.hospitalService,
      hospitalId,
    );
    await this.hospitalService.put(hospitalId, data);
    await Promise.all(
      files.map(async (file) => {
        return await this.imageService.put(
          file.buffer,
          file.originalname,
          hospitalId,
          hospital.image,
        );
      }),
    );
    return await this.hospitalService.findById(hospital.id);
  }

  @Delete(':hospitalId')
  @ApiOperation({ summary: '병원 삭제' })
  @ApiCreatedResponse({ type: HospitalEntity })
  async remove(@Param('hospitalId') hospitalId: string) {
    await checkHospitalExistence(this.hospitalService, hospitalId);
    return this.hospitalService.remove(hospitalId);
  }
}
