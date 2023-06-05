import { OmitType } from '@nestjs/swagger';
import { ImageEntity } from '../entities/image.entity';

export class CreateImageDto extends OmitType(ImageEntity, ['id']) {}
