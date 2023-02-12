import { Injectable } from '@nestjs/common';
import { CatModel } from '@lib/model-mongodb/cat/cat.model';
import { CatRepository } from '@lib/model-mongodb/cat/cat.repository';
import { CatQueryRepository } from '@lib/model-mongodb/cat/cat.query.repository';
import { UserRepository } from '@lib/model-mysql/user/user.repository';
import { UserQueryRepository } from '@lib/model-mysql/user/user.query.repository';
import { User } from '@lib/model-mysql/user/user.entity';

@Injectable()
export class UserApiService {
  constructor(
    private readonly catQueryRepository: CatQueryRepository,
    private readonly catRepository: CatRepository,
    private readonly userQueryRepository: UserQueryRepository,
    private readonly userRepository: UserRepository,
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

  async findAllUser(): Promise<User[]> {
    return await this.userQueryRepository.findAll();
  }

  async createUser(): Promise<User> {
    return await this.userRepository.create();
  }
}
