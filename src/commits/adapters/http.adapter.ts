import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private readonly gitHubToken: string;

  constructor(private readonly configService: ConfigService) {
    this.gitHubToken = configService.get('gitHubToken');
  }
  async get(url: string): Promise<any> {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.gitHubToken}`,
        },
      });
      return data;
    } catch (error) {
      console.log('error', error);
      throw new Error('Unexpected error - check server logs');
    }
  }
}
