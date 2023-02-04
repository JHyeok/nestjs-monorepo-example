import { Test, TestingModule } from '@nestjs/testing';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';

describe('UserApiController', () => {
  let userApiController: UserApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserApiController],
      providers: [UserApiService],
    }).compile();

    userApiController = app.get<UserApiController>(UserApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userApiController.getHello()).toBe('Hello World!');
    });
  });
});
