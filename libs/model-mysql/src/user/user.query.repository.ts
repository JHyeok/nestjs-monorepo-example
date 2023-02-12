import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@lib/model-mysql/user/user.entity';

@Injectable()
export class UserQueryRepository {
  constructor(
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.user.findAll();
  }
}
