import { Module } from '@nestjs/common';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';
import { CatModule } from '@lib/model-mongodb/cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from '@lib/model-mongodb/mongoose.config.service';
import { CatQueryRepository } from './cat.query.repository';
import { CatRepository } from './cat.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    CatModule,
  ],
  controllers: [UserApiController],
  providers: [UserApiService, CatQueryRepository, CatRepository],
})
export class UserApiModule {}
