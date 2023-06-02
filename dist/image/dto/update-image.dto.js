"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const image_entity_1 = require("../entities/image.entity");
class UpdateImageDto extends (0, swagger_1.PickType)(image_entity_1.ImageEntity, ['imageUrl']) {
}
exports.UpdateImageDto = UpdateImageDto;
//# sourceMappingURL=update-image.dto.js.map