import { Module } from '@nestjs/common';
import { ConcurrencyService } from './concurrency.service';
import { ConcurrencyController } from './concurrency.controller';

@Module({
  controllers: [ConcurrencyController],
  providers: [ConcurrencyService],
})
export class ConcurrencyModule {}
