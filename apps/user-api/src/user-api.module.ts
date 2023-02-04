import { Module } from '@nestjs/common';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';
import { ModelMongodbService } from '@lib/model-mongodb';

@Module({
  imports: [],
  controllers: [UserApiController],
  providers: [UserApiService, ModelMongodbService],
})
export class UserApiModule {}
