import { OpenApiRepository } from './openApi.repository';
import { OpenApiAddrDto, OpenApiGPSDto, OpenApiInfoDto } from './dto/openAPI.request.dto';
export declare class OpenApiController {
    private readonly apiRepository;
    constructor(apiRepository: OpenApiRepository);
    getAddrData(body: OpenApiAddrDto): Promise<any>;
    getGPSData(body: OpenApiGPSDto): Promise<any>;
    getInfoData(param: OpenApiInfoDto): Promise<any>;
}
