import { ReservationEntity } from '../entities/reservation.entity';
declare const CreateReservationDto_base: import("@nestjs/common").Type<Pick<ReservationEntity, "hospitalId" | "memo">>;
export declare class CreateReservationDto extends CreateReservationDto_base {
}
export {};
