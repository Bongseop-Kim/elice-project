import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoggerMiddleware } from './common/logger/logger.middleware';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { HospitalModule } from './hospital/hospital.module';
import { KidModule } from './kid/kid.module';
import { AdminModule } from './admin/admin.module';
import { ImageModule } from './image/image.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ReservationModule } from './reservation/reservation.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    PrismaModule,
    KidModule,
    HospitalModule,
    AdminModule,
    ImageModule,
    ReviewsModule,
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
