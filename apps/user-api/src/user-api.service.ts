import { Injectable } from '@nestjs/common';
import { CatModel } from '@lib/model-mongodb/cat/cat.model';
import { CatQueryRepository } from './cat.query.repository';
import { CatRepository } from './cat.repository';

@Injectable()
export class UserApiService {
  constructor(
    private readonly catQueryRepository: CatQueryRepository,
    private readonly catRepository: CatRepository,
  ) {}

  getHello(): string {
    return 'Hello user-api';
  }

  async findAll(): Promise<CatModel[]> {
    return await this.catQueryRepository.findAll();
  }

  async create(): Promise<CatModel> {
    return await this.catRepository.create();
  }
}
