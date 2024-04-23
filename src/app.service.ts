import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.debug('running bot press poc');
    return 'running bot press poc';
  }

  webhook(body) {
    this.logger.debug('body', body);
  }
}
