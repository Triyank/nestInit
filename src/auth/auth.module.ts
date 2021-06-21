import { Module } from '@nestjs/common';
import { AuthMiddleware } from './auth';
import { UsersModule } from '../users/users.module';
import { CommonUtilsModule } from '../commonUtils/commonUtils.module';

@Module({
    imports: [UsersModule, CommonUtilsModule],
    providers: [AuthMiddleware]
})

export class MiddlewareModule {}