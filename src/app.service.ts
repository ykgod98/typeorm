import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    // const dbHost = this.configService.get('database.host');
    // const dbUser = this.configService.get('database.user');
    // const dbPort = this.configService.get('database.port');
    // const dbPassword = this.configService.get('database.password');
    // console.log(dbHost);
    // console.log(dbUser);
    // console.log(dbPort);
    // console.log(dbPassword);
    // console.log(process.env.DATABASE_HOST);
  }
}
