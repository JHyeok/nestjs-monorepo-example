import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminApiService {
  getHello(): string {
    return 'Hello admin-api!';
  }
}
