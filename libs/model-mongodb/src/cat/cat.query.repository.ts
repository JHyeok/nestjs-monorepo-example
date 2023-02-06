import { CatDocument, CatModel } from '@lib/model-mongodb/cat/cat.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatQueryRepository {
  constructor(
    @InjectModel(CatModel.name)
    private readonly catModel: Model<CatDocument>,
  ) {}

  async findAll(): Promise<CatModel[]> {
    return await this.catModel.find({}, {}, { lean: true }).exec();
  }
}
