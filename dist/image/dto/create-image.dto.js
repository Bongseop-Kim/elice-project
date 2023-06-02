"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const image_entity_1 = require("../entities/image.entity");
class CreateImageDto extends (0, swagger_1.OmitType)(image_entity_1.ImageEntity, ['id']) {
}
exports.CreateImageDto = CreateImageDto;
//# sourceMappingURL=create-image.dto.js.map