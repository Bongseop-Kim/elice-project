import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Tema05Service } from './tema05.service';
import { CreateTema05Dto } from './dto/create-tema05.dto';
import { UpdateTema05Dto } from './dto/update-tema05.dto';

@Controller('tema05')
export class Tema05Controller {
  constructor(private readonly tema05Service: Tema05Service) {}

  @Post()
  create(@Body() createTema05Dto: CreateTema05Dto) {
    return this.tema05Service.create(createTema05Dto);
  }

  @Get()
  findAll() {
    return this.tema05Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tema05Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTema05Dto: UpdateTema05Dto) {
    return this.tema05Service.update(+id, updateTema05Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tema05Service.remove(+id);
  }
}
