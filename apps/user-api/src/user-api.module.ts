import { Module } from '@nestjs/common';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';
import { CatModule } from '@lib/model-mongodb/cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from '@lib/model-mongodb/mongoose.config.service';
import { CatRepository } from '@lib/model-mongodb/cat/cat.repository';
import { CatQueryRepository } from '@lib/model-mongodb/cat/cat.query.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from '@lib/model-mysql/sequelize.config.service';
import { UserModule } from '@lib/model-mysql/user/user.module';
import { UserRepository } from '@lib/model-mysql/user/user.repository';
import { UserQueryRepository } from '@lib/model-mysql/user/user.query.repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    CatModule,
    UserModule,
  ],
  controllers: [UserApiController],
  providers: [
    UserApiService,
    CatRepository,
    CatQueryRepository,
    UserRepository,
    UserQueryRepository,
  ],
})
export class UserApiModule {}
