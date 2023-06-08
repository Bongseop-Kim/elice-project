import { ApiProperty } from '@nestjs/swagger';

export class UserType {
    userType: string;
}

export class Id {
    userId: string;
}

export class Ids {
    userIds: number[]
}