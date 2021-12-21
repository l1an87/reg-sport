import {Module} from '@nestjs/common';
import {TeamsController} from './teams.controller';
import {TeamsService} from './teams.service';
import {DatabaseModule} from "../database/database.module";
import {Connection} from "typeorm";
import {Team} from "./entities/team.entity";
import {UsersModule} from "../users/users.module";
import {RolesModule} from "../roles/roles.module";
import {FilesModule} from "../files/files.module";

@Module({
    imports: [
        DatabaseModule,
        UsersModule,
        RolesModule,
        FilesModule,
    ],
    controllers: [TeamsController],
    providers: [
        TeamsService,
        {
            provide: 'TEAM_REPOSITORY',
            useFactory: (connection: Connection) => connection.getRepository(Team),
            inject: ['DATABASE_CONNECTION'],
        },
    ],
    exports: [
        TeamsService,
    ],
})
export class TeamsModule {
}
