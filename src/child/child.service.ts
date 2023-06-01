import { HttpException, Injectable } from '@nestjs/common';
import { ChildRepository } from './child.repository';
import { RegistChildDto, UpdateChildDto } from './dto/child.dtos';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Injectable()
export class ChildService{
    constructor(private readonly childRepository:ChildRepository) {}

    async registChild(body: RegistChildDto, User){
        const { name, gender, birth, img, memo } = body;

        const isChildExist = await this.childRepository.existByParent(User)
        isChildExist.map((child:RegistChildDto)=>{
          if(child.name === body.name){
            throw new HttpException('아이의 이름이 중복되지 않았는지 확인해 주세요.', 400);
          }
        })

        console.log(isChildExist)
        
        const child = await this.childRepository.registChild({
            name,
            gender,
            birth,
            parentId: User.id,
            img,
            memo
        })
    return child;
    }

    async updateChild(id: number, body: UpdateChildDto) {
      const child = await this.childRepository.updateChild(id, body)
      return child;
    }

    async deleteChild(id: number) {
      return await this.childRepository.deleteChild(id) 
    }
}