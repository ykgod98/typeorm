import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { User } from './user/entities/user.entity';
import { BizUserModule } from './biz-user/biz-user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['./src/config/.env'], //app/module에서 시작할때는 경로
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [User],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    UserModule,
    PhotoModule,
    BizUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// datasource와 typeormmodule의 차이점

// env file path를 여러개 둘 수 있음.
