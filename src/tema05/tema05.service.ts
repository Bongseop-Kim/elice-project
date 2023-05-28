import { Injectable } from '@nestjs/common';
import { CreateTema05Dto } from './dto/create-tema05.dto';
import { UpdateTema05Dto } from './dto/update-tema05.dto';

@Injectable()
export class Tema05Service {
  create(createTema05Dto: CreateTema05Dto) {
    return 'This action adds a new tema05';
  }

  findAll() {
    return `This action returns all tema05`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tema05`;
  }

  update(id: number, updateTema05Dto: UpdateTema05Dto) {
    return `This action updates a #${id} tema05`;
  }

  remove(id: number) {
    return `This action removes a #${id} tema05`;
  }
}
