import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });
// console.log(process.env);
// console.log(1);
export default registerAs('database', () => {
  return {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    name: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    logging: false,
    autoLoadEntities: false,
    synchronize: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
  };
});

// &&
// a>b ? 1 : 2
