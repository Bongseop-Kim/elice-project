import { User, Child } from '@prisma/client';
export declare class ChildEntity implements Child {
    id: number;
    name: string;
    gender: string;
    birth: string;
    img: string | null;
    memo: string;
    parent: User;
    parentId: number;
}
