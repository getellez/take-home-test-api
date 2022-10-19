import { AxiosAdapter } from './adapters/http.adapter';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommitService {
  gitHubRepoUrl: string;
  constructor(
    private readonly http: AxiosAdapter,
    private readonly configService: ConfigService,
  ) {
    this.gitHubRepoUrl = configService.getOrThrow('gitHubRepoUrl');
  }

  async getCommits() {
    const data = await this.http.get(this.gitHubRepoUrl);
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
