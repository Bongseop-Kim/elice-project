/*import { Module, forwardRef } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';

import { FavorateController } from './favorate.controller';
import { FavorateService } from './favorate.service';
import { FavorateRepository } from './favorate.repository';

@Module({
  imports: [forwardRef(() => AuthModule), PrismaModule],
  controllers: [FavorateController],
  providers: [FavorateService, FavorateRepository],
  exports: [FavorateService, FavorateRepository],
})
export class UsersModule {}*/
