/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateBizUserDto } from './dto/create-biz-user.dto';
import { UpdateBizUserDto } from './dto/update-biz-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { BizUser } from './entities/biz-user.entity';
import { privateDecrypt } from 'crypto';

@Injectable()
export class BizUserService {
  constructor(
    @InjectRepository(BizUser)
    private bizUserRepository: Repository<BizUser>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findUser(): Promise<User[]> {
    return this.userRepository.find();
  }
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
