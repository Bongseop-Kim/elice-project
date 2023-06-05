import { HttpException, Injectable } from '@nestjs/common';
import { KidRepository } from './kid.repository';
import { RegistKidDto, UpdateKidDto } from './dto/kid.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class KidService {
  constructor(private readonly kidRepository: KidRepository) {}

  async registKid(User) {
    //const { name, gender, birth, memo } = body;

    /*const isKidExist = await this.kidRepository.existByParent(User);
    isKidExist.map((kid: RegistKidDto) => {
      if (kid.name === body.name) {
        throw new HttpException(
          '아이의 이름이 중복되지 않았는지 확인해 주세요.',
          400,
        );
      }
    });*/
    
    /*기존 정보를 입력하고 아이를 추가하는 기능에서 빈 아이 칸을 만들어주고 수정하는 형식으로
    작성할 수 있도록 변경하는 과정에서 API 수정한 부분입니다.*/

    const kid = await this.kidRepository.registKid({
      parentId: User.id
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
