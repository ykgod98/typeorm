import { PartialType } from '@nestjs/mapped-types';
import { CreateBizUserDto } from './create-biz-user.dto';

export class UpdateBizUserDto extends PartialType(CreateBizUserDto) {}
