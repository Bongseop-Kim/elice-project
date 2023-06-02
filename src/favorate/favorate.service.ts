import { HttpException, Injectable } from '@nestjs/common';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { FavorateDto } from './dto/favorate.dto';
import { FavorateRepository } from './favorate.repository';

@Injectable()
export class FavorateService {
  constructor(private readonly favorateRepository: FavorateRepository) {}
}
