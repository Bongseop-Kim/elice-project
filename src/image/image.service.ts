import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageRepository } from './image.repository';

@Injectable()
export class ImageService {
  constructor(private readonly imageRepository: ImageRepository) {}

  create(body: CreateImageDto) {
    return this.imageRepository.create(body);
  }

  findByHospitalId(id: string) {
    return this.imageRepository.findByHospitalId(id);
  }

  update(id: number, data: UpdateImageDto) {
    return this.imageRepository.updateImage(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
