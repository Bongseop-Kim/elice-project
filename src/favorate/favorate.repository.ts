import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User, Hospital } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FavorateDto } from './dto/favorate.dto';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class FavorateRepository{
    constructor(private prisma: PrismaService) {}

    
}