import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  getHello(): string {
    this.logger.debug('running bot press poc');
    return 'running bot press poc';
  }

  webhook(body) {
    this.logger.debug('webhookBody', body);
    return 'successfully received by klink.cloud';
  }

  async sendMessage(body) {
    const botPressUrl = this.configService.get('botPressUrl');
    this.logger.debug(botPressUrl);
    const response = await lastValueFrom(
      this.httpService.post(botPressUrl, body).pipe(
        map((resp) => resp.data),
        catchError((error) => {
          this.logger.error('sendMessageError', error);
          throw new Error(JSON.stringify(error, null, 3));
        }),
      ),
    );
    // this.logger.debug('sendMessageBody', body);
    return response;
  }
}
