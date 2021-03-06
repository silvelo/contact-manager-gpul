import { Module, RequestMethod, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware, loggerMiddleware } from '../common/middlewares/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UsersController],
    components: [UsersService]
})

export class UsersModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            //*
            .apply(LoggerMiddleware)
            .forRoutes(UsersController);
        /*/

        .apply(loggerMiddleware)
        .forRoutes({ path: '/users', method: RequestMethod.GET });
    //*/
    }
} 
