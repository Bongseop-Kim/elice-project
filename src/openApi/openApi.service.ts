import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs'
import { OpenApiRepository } from './openApi.repository';

@Injectable()
export class OpenApiService {
  
  constructor(private readonly apiRepository: OpenApiRepository){}

}