import { CommonlibService } from '@app/commonlib/commonlib.service';
import { Controller, Get } from '@nestjs/common';
import { App2Service } from './app2.service';

@Controller()
export class App2Controller {
  constructor(private readonly app2Service: App2Service, private readonly commonlibService: CommonlibService) {}

  @Get()
  getHello(): string {
    return this.app2Service.getHello();
  }

  @Get('/commonlib')
  getCommonlib(): string {
    return this.commonlibService.getName();
  }
}
