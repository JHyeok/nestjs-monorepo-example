import { Controller, Get } from '@nestjs/common';
import { UserApiService } from './user-api.service';
import { ModelMongodbService } from '@lib/model-mongodb';

@Controller()
export class UserApiController {
  constructor(
    private readonly userApiService: UserApiService,
    private readonly modelMongodbService: ModelMongodbService,
  ) {}

  @Get()
  getHello(): string {
    return this.userApiService.getHello();
  }

  @Get('/model-mongodb')
  getModel(): string {
    return this.modelMongodbService.getHello();
  }
}
