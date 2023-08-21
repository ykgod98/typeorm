import { Module } from '@nestjs/common';
import { BizUserService } from './biz-user.service';
import { BizUserController } from './biz-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { BizUser } from './entities/biz-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BizUser, User])],
  controllers: [BizUserController],
  providers: [BizUserService],
})
export class BizUserModule {}

//숙제
