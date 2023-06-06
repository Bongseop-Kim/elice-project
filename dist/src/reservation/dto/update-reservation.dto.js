"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReservationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const reservation_entity_1 = require("../entities/reservation.entity");
class UpdateReservationDto extends (0, swagger_1.PickType)(reservation_entity_1.ReservationEntity, [
    'memo',
    'read',
]) {
}
exports.UpdateReservationDto = UpdateReservationDto;
//# sourceMappingURL=update-reservation.dto.js.map