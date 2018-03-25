import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from "./modules/common/exceptions/http-exception.filter";
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(3000);
}

bootstrap();