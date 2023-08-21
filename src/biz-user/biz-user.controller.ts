import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BizUserService } from './biz-user.service';
import { CreateBizUserDto } from './dto/create-biz-user.dto';
import { UpdateBizUserDto } from './dto/update-biz-user.dto';

@Controller('biz-user')
export class BizUserController {
  constructor(private readonly bizUserService: BizUserService) {}

  @Post()
  create(@Body() createBizUserDto: CreateBizUserDto) {
    return this.bizUserService.create(createBizUserDto);
  }

  @Get()
  findUser() {
    return this.bizUserService.findUser();
  }

  // @Get()
  // findAll() {
  //   return 'all return';
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bizUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBizUserDto: UpdateBizUserDto) {
    return this.bizUserService.update(+id, updateBizUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bizUserService.remove(+id);
  }
}
