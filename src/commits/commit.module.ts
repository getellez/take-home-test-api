import { Module } from '@nestjs/common';
import { CommitService } from './commit.service';
import { CommitController } from './commit.controller';
import { AxiosAdapter } from './adapters/http.adapter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [CommitController],
  providers: [CommitService, AxiosAdapter],
})
export class CommitModule {}
