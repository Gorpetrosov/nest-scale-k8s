import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConcurrencyService {
  private readonly logger = new Logger(ConcurrencyService.name);

  async getPromises() {
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(await this.sleep('getPromises one by one'));
    }
    return results;
  }

  async getPromisesParallel() {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      promises.push(this.sleep('getPromises Parallel'));
    }
    return Promise.all(promises);
  }

  private async sleep(type: string) {
    return new Promise((resolve) => {
      this.logger.log('Start sleep');
      setTimeout(() => {
        this.logger.log('Sleep complete');
        resolve({
          type,
        });
      }, 1000);
    });
  }
}
