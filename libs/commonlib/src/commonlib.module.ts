import { Module } from '@nestjs/common';
import { CommonlibService } from './commonlib.service';

@Module({
  providers: [CommonlibService],
  exports: [CommonlibService],
})
export class CommonlibModule {}
