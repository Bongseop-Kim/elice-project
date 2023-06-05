"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const logger_middleware_1 = require("./common/logger/logger.middleware");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const hospital_module_1 = require("./hospital/hospital.module");
const kid_module_1 = require("./kid/kid.module");
const admin_module_1 = require("./admin/admin.module");
const image_module_1 = require("./image/image.module");
const reviews_module_1 = require("./reviews/reviews.module");
const reservation_module_1 = require("./reservation/reservation.module");
const favorite_module_1 = require("./favorite/favorite.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            kid_module_1.KidModule,
            hospital_module_1.HospitalModule,
            admin_module_1.AdminModule,
            image_module_1.ImageModule,
            reviews_module_1.ReviewsModule,
            reservation_module_1.ReservationModule,
            favorite_module_1.FavoriteModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map