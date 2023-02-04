import { Test, TestingModule } from '@nestjs/testing';
import { ModelMysqlService } from './model-mysql.service';

describe('ModelMysqlService', () => {
  let service: ModelMysqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelMysqlService],
    }).compile();

    service = module.get<ModelMysqlService>(ModelMysqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
