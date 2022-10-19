import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitModule } from './commits/commit.module';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    CommitModule,
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
