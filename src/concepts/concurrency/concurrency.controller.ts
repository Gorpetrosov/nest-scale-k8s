import { Controller, Get } from '@nestjs/common';
import { ConcurrencyService } from './concurrency.service';

@Controller('concurrency')
export class ConcurrencyController {
  constructor(private readonly concurrencyService: ConcurrencyService) {}

  @Get('promises')
  async promises() {
    return this.concurrencyService.getPromises();
  }

  /**
   * JavaScript Promises do introduce some memory overhead, but it's usually minimal and not a significant concern for most applications.
   * When you create a new Promise, it requires some memory to store its internal state and any variables captured in its closure.
   * However, this overhead is generally small compared to other aspects of your application's memory usage,
   * such as the size of your data structures or the memory required by the JavaScript engine itself.
   *
   * In modern JavaScript engines, memory management is quite efficient, and the impact of Promise overhead
   * is usually negligible unless you're dealing with extremely large numbers of Promises. In such cases,
   * you might consider techniques like Promise pooling or batching to reduce the number of Promises
   * created simultaneously and manage memory more effectively.
   *
   * Promise pooling: Instead of creating a new Promise for each task or operation,
   * you can reuse a pool of pre-allocated Promises. When a task completes,
   * instead of creating a new Promise for the next task, you reset the existing Promise
   * to its initial state and reuse it. This can reduce the overhead of creating and garbage collecting many Promise objects.
   *
   * Here's a basic example of how you might implement a simple Promise pool:
   * class PromisePool {
   *     constructor(concurrency) {
   *         this.concurrency = concurrency;
   *         this.queue = [];
   *         this.activeCount = 0;
   *     }
   *
   *     add(task) {
   *         return new Promise((resolve, reject) => {
   *             this.queue.push({ task, resolve, reject });
   *             this.processQueue();
   *         });
   *     }
   *
   *     processQueue() {
   *         if (this.activeCount >= this.concurrency) {
   *             return;
   *         }
   *
   *         const item = this.queue.shift();
   *         if (!item) {
   *             return;
   *         }
   *
   *         this.activeCount++;
   *         const { task, resolve, reject } = item;
   *         task().then((result) => {
   *             resolve(result);
   *         }).catch((error) => {
   *             reject(error);
   *         }).finally(() => {
   *             this.activeCount--;
   *             this.processQueue();
   *         });
   *     }
   * }
   *
   * Promise batching: Instead of processing each task individually,
   * you can batch multiple tasks into a single Promise. This can reduce the overhead of managing many Promise instances,
   * especially if the tasks are lightweight and can be processed together.
   *
   * Here's a basic example of how you might implement a simple Promise batching:
   * function batchPromises(tasks, batchSize) {
   *     const batches = [];
   *     for (let i = 0; i < tasks.length; i += batchSize) {
   *         batches.push(tasks.slice(i, i + batchSize));
   *     }
   *
   *     return Promise.all(batches.map(batch => {
   *         return Promise.all(batch.map(task => task()));
   *     })).then(results => {
   *         return results.flat();
   *     });
   * }
   */
  @Get('promises-parallel')
  async promisesParallel() {
    return this.concurrencyService.getPromisesParallel();
  }
}
