import { Module } from '@nestjs/common';
import { HorizontalScalingService } from './horizontal-scaling.service';
import { HorizontalScalingController } from './horizontal-scaling.controller';

@Module({
  controllers: [HorizontalScalingController],
  providers: [HorizontalScalingService],
})
export class HorizontalScalingModule {}
