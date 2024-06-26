import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/webhook')
  webhook(@Body() body) {
    return this.appService.webhook(body);
  }

  @Post('/send-message')
  sendMessage(@Body() body) {
    return this.appService.sendMessage(body);
  }
}
