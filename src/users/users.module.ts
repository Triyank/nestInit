 import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { CommonUtilsModule } from "../commonUtils/commonUtils.module";
import { DatabaseModule } from "../database/database.module";
import { usersProviders } from "./user.providers";
 import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthMiddleware } from "../auth/auth";

 @Module({
     imports: [DatabaseModule, CommonUtilsModule],
     controllers: [UsersController],
     providers: [UsersService, ...usersProviders],
 })

 export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(AuthMiddleware)
        .forRoutes({path: 'user', method: RequestMethod.GET}, {path: 'user', method: RequestMethod.POST})
    }
}
 
