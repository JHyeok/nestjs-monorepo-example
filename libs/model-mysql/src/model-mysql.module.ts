import { Module } from '@nestjs/common';
import { ModelMysqlService } from './model-mysql.service';

@Module({
  providers: [ModelMysqlService],
  exports: [ModelMysqlService],
})
export class ModelMysqlModule {}
