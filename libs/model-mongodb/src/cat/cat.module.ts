import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModel, CatSchema } from '@lib/model-mongodb/cat/cat.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CatModel.name,
        schema: CatSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
  providers: [],
  controllers: [],
})
export class CatModule {}
