"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiRepository = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let OpenApiRepository = class OpenApiRepository {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async addrFetchData(body) {
        let { Q0 = '', Q1 = '', QN = '', pageNo = '1' } = body;
        if (Q0) {
            Q0 = '&Q0=' + Q0;
        }
        if (Q1) {
            Q1 = '&Q1=' + Q1;
        }
        if (QN) {
            QN = '&QN=' + QN;
        }
        if (pageNo) {
            pageNo = '&pageNo=' + pageNo;
        }
        const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncListInfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D${Q0}${Q1}&QD=D002${QN}${pageNo}&numOfRows=10`;
        const response$ = this.httpService.get(url);
        this.response = await (0, rxjs_1.lastValueFrom)(response$);
        const data = this.response.data;
        return data;
    }
    async infoFetchData(param) {
        const { hpid } = param;
        const upperId = '&HPID=' + hpid;
        const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlBassInfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D${upperId}`;
        const response$ = this.httpService.get(url);
        this.response = await (0, rxjs_1.lastValueFrom)(response$);
        const data = this.response.data;
        return data;
    }
    async gpsFetchData(body) {
        const { WGS84_LON, WGS84_LAT, numOfRows = '30' } = body;
        const LON = '&WGS84_LON=' + WGS84_LON;
        const LAT = '&WGS84_LAT=' + WGS84_LAT;
        const rows = '&numOfRows=' + numOfRows;
        const url = `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncLcinfoInqire?serviceKey=GHLcXTkhxXceH6Egi5nK7T%2BTz5bX5IVBAWuv0vCkaM4bBN4RHzCWgUSD%2FRuU58gK3SURb5OgMtPOaiAnkVXTmg%3D%3D${LON}${LAT}&pageNo=1${rows}`;
        const response$ = this.httpService.get(url);
        this.response = await (0, rxjs_1.lastValueFrom)(response$);
        const data = this.response.data;
        return data;
    }
};
OpenApiRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], OpenApiRepository);
exports.OpenApiRepository = OpenApiRepository;
//# sourceMappingURL=openApi.repository.js.map