import { Controller, Get, Post } from "@nestjs/common";
import { UserApiService } from './user-api.service';
import { CatModel } from '@lib/model-mongodb/cat/cat.model';

@Controller()
export class UserApiController {
  constructor(private readonly userApiService: UserApiService) {}

  @Get()
  getHello(): string {
    return this.userApiService.getHello();
  }

  @Get('/cats')
  async getModel(): Promise<CatModel[]> {
    return await this.userApiService.findAll();
  }

  @Post('/cats-test')
  async createModel(): Promise<CatModel> {
    return await this.userApiService.create();
  }
}
