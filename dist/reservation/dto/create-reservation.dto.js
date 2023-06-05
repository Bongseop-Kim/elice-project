"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reservation_entity_1 = require("../entities/reservation.entity");
class CreateReservationDto extends (0, swagger_1.PickType)(reservation_entity_1.ReservationEntity, [
    'hospitalId',
    'memo',
]) {
}
exports.CreateReservationDto = CreateReservationDto;
//# sourceMappingURL=create-reservation.dto.js.map