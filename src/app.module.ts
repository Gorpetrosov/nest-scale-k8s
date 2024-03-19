import { Module } from '@nestjs/common';
import { BlockingModule } from './concepts/blocking/blocking.module';
import { NoneBlockingModule } from './concepts/none-blocking/none-blocking.module';
import { ConcurrencyModule } from './concepts/concurrency/concurrency.module';
import { HorizontalScalingModule } from './concepts/horizontal-scaling/horizontal-scaling.module';

@Module({
  imports: [
    BlockingModule,
    NoneBlockingModule,
    ConcurrencyModule,
    HorizontalScalingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
