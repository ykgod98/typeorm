/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateBizUserDto } from './dto/create-biz-user.dto';
import { UpdateBizUserDto } from './dto/update-biz-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class BizUserService {
  create(CreateBizUserDto: CreateBizUserDto) {
    return 'This action adds a new bizUser';
  }

  findAll() {
    return `This action returns all bizUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bizUser`;
  }

  update(id: number, updateBizUserDto: UpdateBizUserDto) {
    return `This action updates a #${id} bizUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} bizUser`;
  }
}
