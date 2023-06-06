import { ImageEntity } from '../entities/image.entity';
declare const InputImageDto_base: import("@nestjs/common").Type<Omit<ImageEntity, "id" | "imageUrl" | "kidId">>;
export declare class InputImageDto extends InputImageDto_base {
    kidId: string | null;
}
export {};
