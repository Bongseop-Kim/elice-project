import { HttpException, Injectable } from '@nestjs/common';
import { KidRepository } from './kid.repository';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class KidService {
  constructor(private readonly kidRepository: KidRepository) {}

  async registKid(body: RegistKidDto, User) {
    const { name, gender, birth, memo } = body;

    const isKidExist = await this.kidRepository.existByParent(User);
    isKidExist.map((kid: RegistKidDto) => {
      if (kid.name === body.name) {
        throw new HttpException(
          '아이의 이름이 중복되지 않았는지 확인해 주세요.',
          400,
        );
      }
    });

    const kid = await this.kidRepository.registKid({
      name,
      gender,
      birth,
      parentId: User.id,
      memo,
    });
    return kid;
  }

  async getKids(User){
    const kids = await this.kidRepository.getKids(User)
    return kids;
  }

  async updateKid(id: string, body: UpdateKidDto) {
    const kid = await this.kidRepository.updateKid(id, body);
    return kid;
  }

  async deleteKid(id: string) {
    return await this.kidRepository.deleteKid(id);
  }
}
