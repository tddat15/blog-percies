import { Inject, Injectable } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  env: process.env.NODE_ENV,
  name: process.env.APP_NAME,
  port: process.env.APP_PORT,
  serviceName: process.env.SERVICE_NAME,
  userTopicArn: process.env.AWS_SNS_ACCOUNT_SERVICE_EVENT_TOPIC_ARN,
  userQueueUrl: process.env.AWS_SQS_ACCOUNT_SERVICE_EVENT_QUEUE_URL,
  userDlqUrl: process.env.AWS_SQS_ACCOUNT_SERVICE_EVENT_DLQ_URL,
  fileQueueUrl: process.env.AWS_SQS_FILE_SERVICE_EVENT_QUEUE_URL,
  emailQueueUrl: process.env.AWS_SQS_EMAIL_SERVICE_EVENT_QUEUE_URL,
  databaseUrl: process.env.DATABASE_URL,
  schemaName: process.env.SCHEMA_NAME,
  jwtSecret: process.env.JWT_SECRET,
  apiUrl: process.env.API_URL,
  apiKey: process.env.API_KEY,
}));

@Injectable()
export class AppConfig {
  public readonly port: number;
  public readonly env: string;

  constructor(
    @Inject(appConfig.KEY)
    config: ConfigType<typeof appConfig>,
  ) {
    this.port = Number(config.port);
    this.env = config.env;
  }
}
