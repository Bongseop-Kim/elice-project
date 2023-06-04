import { Module, forwardRef } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

import { KidController } from './kid.controller';
import { KidService } from './kid.service';
import { KidRepository } from './kid.repository';

@Module({
  imports: [forwardRef(() => AuthModule), PrismaModule],
  controllers: [KidController],
  providers: [KidService, KidRepository],
  exports: [KidService, KidRepository],
})
export class KidModule {}
