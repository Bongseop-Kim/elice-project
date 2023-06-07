import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ImageEntity } from '../entities/image.entity';
import { IsOptional, IsString } from 'class-validator';

export class InputImageDto extends OmitType(ImageEntity, [
  'id',
  'imageUrl',
  'kidId',
]) {
  //폼 데이터의 경우 문자열만 받을 수 있기 때문에 따로 인풋이티오를 만들었습니다.
  @ApiProperty()
  @IsOptional()
  @IsString()
  kidId: string | null;
}
