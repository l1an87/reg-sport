import {Module} from '@nestjs/common';
import {Connection} from "typeorm";

import {DatabaseModule} from "../database/database.module";

import {RolesController} from './roles.controller';
import {RolesService} from './roles.service';
import {Role} from "./entities/role.entity";

@Module({
    controllers: [RolesController],
    imports: [
        DatabaseModule,
    ],
    providers: [
        RolesService,
        {
            provide: 'ROLE_REPOSITORY',
            useFactory: (connection: Connection) => connection.getRepository(Role),
            inject: ['DATABASE_CONNECTION'],
        },
    ],
    exports: [
        RolesService,
    ],
})
export class RolesModule {
}
