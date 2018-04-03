import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from "./modules/common/exceptions/http-exception.filter";
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());
    const options = new DocumentBuilder()
        .setTitle('Contacts Example')
        .setDescription('The contacts API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);

    await app.listen(3000);
}

bootstrap();