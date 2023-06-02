import { Module, forwardRef } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

import { ChildController } from './child.controller';
import { ChildService } from './child.service';
import { ChildRepository } from './child.repository';

@Module({
  imports: [forwardRef(() => AuthModule), PrismaModule],
  controllers: [ChildController],
  providers: [ChildService, ChildRepository],
  exports: [ChildService, ChildRepository],
})
export class ChildModule {}