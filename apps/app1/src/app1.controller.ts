import { CommonlibService } from '@app/commonlib/commonlib.service';
import { Controller, Get } from '@nestjs/common';
import { App1Service } from './app1.service';

@Controller()
export class App1Controller {
  constructor(private readonly app1Service: App1Service, private readonly commonlibService: CommonlibService) {}

  @Get()
  getHello(): string {
    return this.app1Service.getHello();
  }

  @Get('/commonlib')
  getCommonlib(): string {
    return this.commonlibService.getName();
  }
}
