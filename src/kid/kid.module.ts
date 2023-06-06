import { Module, forwardRef } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

import { KidController } from './kid.controller';
import { KidService } from './kid.service';

@Module({
  imports: [forwardRef(() => AuthModule), PrismaModule],
  controllers: [KidController],
  providers: [KidService],
  exports: [KidService],
})
export class KidModule {}
