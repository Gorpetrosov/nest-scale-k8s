import { Module } from '@nestjs/common';
import { NoneBlockingService } from './none-blocking.service';
import { NoneBlockingController } from './none-blocking.controller';

@Module({
  controllers: [NoneBlockingController],
  providers: [NoneBlockingService],
})
export class NoneBlockingModule {}
