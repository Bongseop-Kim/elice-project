import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoggerMiddleware } from './common/logger/logger.middleware';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { HospitalModule } from './hospital/hospital.module';
import { ChildModule } from './child/child.module';
import { ImageModule } from './image/image.module';
import { ReservationModule } from './reservation/reservation.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    PrismaModule,
    ChildModule,
    HospitalModule,
    ImageModule,
    ReservationModule,
    FavoriteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
