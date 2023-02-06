import { Module } from '@nestjs/common';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';
import { CatModule } from '@lib/model-mongodb/cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from '@lib/model-mongodb/mongoose.config.service';
import { CatRepository } from '@lib/model-mongodb/cat/cat.repository';
import { CatQueryRepository } from '@lib/model-mongodb/cat/cat.query.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    CatModule,
  ],
  controllers: [UserApiController],
  providers: [UserApiService, CatRepository, CatQueryRepository],
})
export class UserApiModule {}
