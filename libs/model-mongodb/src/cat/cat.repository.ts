import { CatDocument, CatModel } from '@lib/model-mongodb/cat/cat.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatRepository {
  constructor(
    @InjectModel(CatModel.name)
    private readonly catModel: Model<CatDocument>,
  ) {}

  async create(): Promise<CatModel> {
    return await this.catModel.create({
      name: 'test',
      age: 10,
      breed: 'test',
    });
  }
}
