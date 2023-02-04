import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelMongodbService {
  getHello(): string {
    return 'Hello ModelMongodbService';
  }
}
