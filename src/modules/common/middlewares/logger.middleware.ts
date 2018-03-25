import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (req: Request, res, next) => {
            console.log(`[${req.method}] ${req.originalUrl}`);
            next();
        };
    }
}

export const loggerMiddleware = (req, res, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
};