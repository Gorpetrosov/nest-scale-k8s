import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockingService {
  getHello(): string {
    return 'Hello World!';
  }

  getBlocking() {
    const now = new Date().getTime();
    while (new Date().getTime() < now + 10000) {}
    return {
      synchronous: true,
    };
  }
}
