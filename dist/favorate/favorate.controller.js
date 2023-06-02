"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavorateController = void 0;
const common_1 = require("@nestjs/common");
const favorate_service_1 = require("./favorate.service");
const auth_service_1 = require("../auth/auth.service");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../common/decorators/user.decorator");
const favorate_dto_1 = require("./dto/favorate.dto");
let FavorateController = class FavorateController {
    constructor(favorateService, authService) {
        this.favorateService = favorateService;
        this.authService = authService;
    }
    async newFavorate(id, User) {
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '즐겨찾기 등록' }),
    (0, swagger_1.ApiBody)({
        description: 'regist favorate',
        type: favorate_dto_1.FavorateDto,
    }),
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FavorateController.prototype, "newFavorate", null);
FavorateController = __decorate([
    (0, swagger_1.ApiTags)('Favorate'),
    (0, common_1.Controller)('favorate'),
    __metadata("design:paramtypes", [favorate_service_1.FavorateService,
        auth_service_1.AuthService])
], FavorateController);
exports.FavorateController = FavorateController;
//# sourceMappingURL=favorate.controller.js.map