import { Test, TestingModule } from '@nestjs/testing';
import { ModelMongodbService } from './model-mongodb.service';

describe('ModelMongodbService', () => {
  let service: ModelMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModelMongodbService],
    }).compile();

    service = module.get<ModelMongodbService>(ModelMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
