import { Test, TestingModule } from '@nestjs/testing';
import { BizUserController } from './biz-user.controller';
import { BizUserService } from './biz-user.service';

describe('BizUserController', () => {
  let controller: BizUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BizUserController],
      providers: [BizUserService],
    }).compile();

    controller = module.get<BizUserController>(BizUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
