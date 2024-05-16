import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { ConfigModule, ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth/constans';

@Module({
  imports: [
    ProvidersModule,
    ConfigModule.forRoot({
      load: [appConfig],
      cache: true,
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1d" },
    }),
    LoggerModule.forRootAsync({
      inject: [appConfig.KEY],
      useFactory: async (config: ConfigType<typeof appConfig>) => {
        return {
          pinoHttp: {
            level: config.app.logLevel,
          },
        };
      },
    }),
    AuthModule,
    UsersModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
