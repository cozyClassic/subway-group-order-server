import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [UsersModule, MenusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
