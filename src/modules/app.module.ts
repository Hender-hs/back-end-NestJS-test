import { Module } from '@nestjs/common';
import { ORMModule } from './orm.module';

@Module({
  imports: [ORMModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
