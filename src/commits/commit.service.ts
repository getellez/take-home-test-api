import { AxiosAdapter } from './adapters/http.adapter';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class CommitService {
  gitHubRepoUrl: string;
  constructor(
    private readonly http: AxiosAdapter,
    private readonly configService: ConfigService,
  ) {
    this.gitHubRepoUrl = configService.getOrThrow('gitHubRepoUrl');
  }

  async getCommits(paginationDto: PaginationDto) {
    const { per_page = 5, page = 1 } = paginationDto;
    const data = await this.http.get(
      this.gitHubRepoUrl + `?per_page=${per_page}&page=${page}`,
    );
    const response = data.map((commitElement) => {
      const { sha, commit } = commitElement;
      return {
        sha: sha,
        author: commit.author.name,
        date: commit.author.date,
        message: commit.message,
      };
    });

    return response;
  }
}
