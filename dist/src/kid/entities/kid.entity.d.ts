import { Kid } from '@prisma/client';
export declare class KidEntity implements Kid {
    id: number;
    name: string;
    gender: string;
    birth: string;
    memo: string;
    parentId: number;
}
