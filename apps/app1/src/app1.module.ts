import { CommonlibModule } from '@app/commonlib/commonlib.module';
import { Module } from '@nestjs/common';
import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';

@Module({
  imports: [CommonlibModule],
  controllers: [App1Controller],
  providers: [App1Service],
})
export class App1Module {}
