import { Controller, Get } from '@nestjs/common';
import { BlockingService } from './blocking.service';

@Controller('blocking')
export class BlockingController {
  constructor(private readonly blockingService: BlockingService) {}

  @Get()
  getHello(): string {
    return this.blockingService.getHello();
  }

  @Get('block')
  blocking() {
    return this.blockingService.getBlocking();
  }
}
