import { Module } from '@nestjs/common';
import { CommonUtilsModule } from './commonUtils/commonUtils.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CommonUtilsModule],
})
export class AppModule {}
