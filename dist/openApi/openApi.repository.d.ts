import { HttpService } from '@nestjs/axios';
import { OpenApiAddrDto, OpenApiInfoDto, OpenApiGPSDto } from './dto/openAPI.request.dto';
export declare class OpenApiRepository {
    private httpService;
    private response;
    constructor(httpService: HttpService);
    addrFetchData(body: OpenApiAddrDto): Promise<any>;
    infoFetchData(param: OpenApiInfoDto): Promise<any>;
    gpsFetchData(body: OpenApiGPSDto): Promise<any>;
}
