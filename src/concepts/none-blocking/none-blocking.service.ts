import { Injectable } from '@nestjs/common';

@Injectable()
export class NoneBlockingService {
  getHello(): string {
    return 'Hello World!';
  }

  async getNoneBlocking() {
    return new Promise(async (resolve) => {
      setTimeout(() => {
        resolve({
          asynchronous: true,
        });
      }, 10000);
    });
  }
}
