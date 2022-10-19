import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import axios from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  async get(url: string): Promise<any> {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error('Unexpected error - check server logs');
    }
  }
}
