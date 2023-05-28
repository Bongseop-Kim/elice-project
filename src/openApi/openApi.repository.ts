import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { OpenApiAddrDto, OpenApiInfoDto, OpenApiGPSDto } from './dto/openAPI.request.dto'

@Injectable()
export class OpenApiRepository {
    private response: any
    constructor(private httpService: HttpService) {}
  

    //주소별 병원 검색 API 입니다.
    async addrFetchData(body:OpenApiAddrDto): Promise<any> {
        let { Q0='', Q1='', QN='', pageNo='1' } = body;
        if(Q0){Q0='&Q0='+Q0}
        if(Q1){Q1='&Q1='+Q1}
        if(QN){QN='&QN='+QN}
        if(pageNo){pageNo='&pageNo='+pageNo}
      const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D${Q0}${Q1}&QD=D002${QN}${pageNo}&numOfRows=10`;
  
      const response$ = this.httpService.get(url);
      this.response = await lastValueFrom(response$)
      const data = this.response.data
      //const resultData = data.response.body.items.item
      return data;
    }

    //병원 단일 검색 API입니다.
    async infoFetchData(param:OpenApiInfoDto): Promise<any> {
        const { hpid } = param;
        const upperId = '&HPID='+hpid
      const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlBassInfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D${upperId}`
      
      const response$ = this.httpService.get(url);
      this.response = await lastValueFrom(response$)
      const data = this.response.data
      //
      return data;
    }

    async gpsFetchData(body:OpenApiGPSDto): Promise<any> {
        const { WGS84_LON, WGS84_LAT, numOfRows='30' } = body;
        const LON = '&WGS84_LON='+WGS84_LON
        const LAT = '&WGS84_LAT='+WGS84_LAT
        const rows= '&numOfRows='+numOfRows

      const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncLcinfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D${LON}${LAT}&pageNo=1${rows}`
    
      const response$ = this.httpService.get(url);
      this.response = await lastValueFrom(response$)
      const data = this.response.data
      //
      return data;
    }
}