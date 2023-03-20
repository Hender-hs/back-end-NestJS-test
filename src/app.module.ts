import { AuthModule } from '@AuthModule/auth.module';
import { Module } from '@nestjs/common';
import { ORMModule } from './orm/orm.module';

@Module({
  imports: [AuthModule, ORMModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
