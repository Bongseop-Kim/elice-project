import { Module } from '@nestjs/common';
import { Tema05Service } from './tema05.service';
import { Tema05Controller } from './tema05.controller';

@Module({
  controllers: [Tema05Controller],
  providers: [Tema05Service]
})
export class Tema05Module {}
