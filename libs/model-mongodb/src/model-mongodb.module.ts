import { Module } from '@nestjs/common';
import { ModelMongodbService } from './model-mongodb.service';

@Module({
  providers: [ModelMongodbService],
  exports: [ModelMongodbService],
})
export class ModelMongodbModule {}
