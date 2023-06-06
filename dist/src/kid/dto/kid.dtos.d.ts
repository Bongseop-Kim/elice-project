export declare class RegistKidDto {
    name: string;
    gender: string;
    birth: string;
    parentId: number;
    memo: string;
}
export declare class UpdateKidDto {
    name: string;
    gender: string;
    birth: string;
    memo: string;
    parentId: number;
}
declare const GetKidsDto_base: import("@nestjs/common").Type<Partial<RegistKidDto>>;
export declare class GetKidsDto extends GetKidsDto_base {
}
export {};
