import { PickType } from '@nestjs/swagger';
import { ImageEntity } from '../entities/image.entity';

export class UpdateImageDto extends PickType(ImageEntity, ['imageUrl']) {}
