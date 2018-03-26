import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, response) {
        const status = exception.getStatus();
        let error = exception.getResponse();
        let message;
        if (typeof error === 'object' && (error as Object).hasOwnProperty('message')) {
            message = error['message'];
        } else {
            message = `It's a message from the exception filter`;
        }

        response
            .status(status)
            .json({
                statusCode: status,
                message,
            });
    }
}