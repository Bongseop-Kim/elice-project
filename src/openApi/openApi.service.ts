import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class OpenApiService {
  private response: any
  constructor(private httpService: HttpService) {}

  async fetchData(): Promise<any> {
    const mockQ0 = ['서울특별시', '부산광역시'];
    const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D&Q0=${mockQ0[0]}&Q1=강남구&pageNo=1&numOfRows=5`;

    const response$ = this.httpService.get(url);
    this.response = await lastValueFrom(response$)
    const data = this.response.data
    const resultData = data.response.body.items.item

    return resultData;
  }
}