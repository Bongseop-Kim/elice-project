import { PartialType, PickType } from '@nestjs/swagger';
import { Gender, KidEntity } from '../entities/kid.entity';

export class RegistKidDto extends PickType(KidEntity, [
  'name',
  'gender',
  'birth',
  'parentId',
  'memo',
]) {}

export class UpdateKidDto extends PickType(KidEntity, [
  'name',
  'gender',
  'birth',
  'memo',
  'parentId',
]) {}

export class GetKidsDto extends PartialType(RegistKidDto) {}
