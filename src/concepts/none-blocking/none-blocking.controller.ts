import { Controller, Get } from '@nestjs/common';
import { NoneBlockingService } from './none-blocking.service';

@Controller('none-blocking')
export class NoneBlockingController {
  constructor(private readonly noneBlockingService: NoneBlockingService) {}

  @Get()
  getHello(): string {
    return this.noneBlockingService.getHello();
  }

  @Get('none')
  async noneBlocking() {
    return this.noneBlockingService.getNoneBlocking();
  }
}
