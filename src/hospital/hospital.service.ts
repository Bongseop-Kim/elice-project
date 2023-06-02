import { Injectable } from '@nestjs/common';
import { HospitalRepository } from './hospital.repository';
import { PutHospitalDto } from './dto/put-hospital.dto';

@Injectable()
export class HospitalService {
  constructor(private hospitalRepository: HospitalRepository) {}

  findAll(
    depth1: string,
    depth2: string,
    size: number,
    page: number,
    sort: string,
  ) {
    //프론트와 디비의 depth1, depth2들의 값은 고정되어있습니다.
    //클라이언트는 정해진 버튼을 통해 depth1, depth2를 선택합니다.
    //정해진 값들만 들어오기때문에 "depth1"이 db에 존재하는지 확인하는 작업이 필요 없다고 생각합니다.

    return this.hospitalRepository.findAll(depth1, depth2, size, page, sort);
  }

  findOne(id: string) {
    return this.hospitalRepository.findById(id);
  }

  put(id: string, data: PutHospitalDto) {
    return this.hospitalRepository.putById(id, data);
  }

  remove(id: string) {
    return `This action removes a #${id} hospital`;
  }
}
