import { Module } from '@nestjs/common';
import { BizUserService } from './biz-user.service';
import { BizUserController } from './biz-user.controller';

@Module({
  controllers: [BizUserController],
  providers: [BizUserService],
})
export class BizUserModule {}

//숙제
