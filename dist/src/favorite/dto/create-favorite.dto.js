"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFavoriteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const favorite_entity_1 = require("../entities/favorite.entity");
class CreateFavoriteDto extends (0, swagger_1.PickType)(favorite_entity_1.FavoriteEntity, [
    'hospitalId',
]) {
}
exports.CreateFavoriteDto = CreateFavoriteDto;
//# sourceMappingURL=create-favorite.dto.js.map