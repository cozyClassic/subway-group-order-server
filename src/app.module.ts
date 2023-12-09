import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MenusModule } from './menus/menus.module';
import { User } from './users/entities/user.entity';
import { IngredientType } from './menus/entities/handMadeFood/ingredientType.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // postgresql
      database: 'db.sqlite',
      autoLoadEntities: true,
      entities: [User, IngredientType],
      synchronize: true,
    }),
    UsersModule,
    MenusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
