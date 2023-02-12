import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@lib/model-mysql/user/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}

  async create(): Promise<User> {
    return await this.user.create({
      firstName: 'test',
      lastName: 'test',
      isActive: true,
    });
  }
}
