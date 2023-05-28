import { PartialType } from '@nestjs/swagger';
import { CreateTema05Dto } from './create-tema05.dto';

export class UpdateTema05Dto extends PartialType(CreateTema05Dto) {}
