import { Controller, Get, Query } from '@nestjs/common';
import { CommitService } from './commit.service';
import { PaginationDto } from './dto/pagination.dto';

@Controller('commits')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get()
  async getCommit(@Query() paginationDto: PaginationDto) {
    return await this.commitService.getCommits(paginationDto);
  }
}
