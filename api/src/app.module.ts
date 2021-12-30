import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { SportTypeModule } from './sport-type/sport-type.module';
import { TeamsModule } from './teams/teams.module';
import { FilesModule } from './files/files.module';
import { MembersModule } from './members/members.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    DatabaseModule,
    AuthModule,
    RolesModule,
    SportTypeModule,
    TeamsModule,
    FilesModule,
    MembersModule,
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule { }

