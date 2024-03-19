import { Controller } from '@nestjs/common';
import { HorizontalScalingService } from './horizontal-scaling.service';

@Controller('horizontal-scaling')
export class HorizontalScalingController {
  constructor(
    private readonly horizontalScalingService: HorizontalScalingService,
  ) {}
}
