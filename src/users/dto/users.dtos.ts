import { PickType } from '@nestjs/swagger';
import { UserEntity } from '../entities/users.entity';

export class CreateUserDto extends PickType(UserEntity, [
  'name',
  'email',
  'password',
  'phoneNumber',
]) {}

export class UpdateUserDto extends PickType(UserEntity, [
  'name',
  'email',
  'address',
  'password',
  'phoneNumber',
  'role',
  'userLat',
  'userLon',
]) {}

export class CreateManagerDto extends PickType(UserEntity, [
  'name',
  'email',
  'password',
  'phoneNumber',
  'adminVerified',
  'hospitalId',
]) {}
