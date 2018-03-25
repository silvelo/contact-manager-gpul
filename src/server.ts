import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { loggerMiddleware, LoggerMiddleware } from './modules/common/logger.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();