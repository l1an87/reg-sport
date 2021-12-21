import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { SportTypeModule } from './sport-type/sport-type.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    DatabaseModule,
    AuthModule,
    RolesModule,
    SportTypeModule,
    TeamsModule,
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule { }

