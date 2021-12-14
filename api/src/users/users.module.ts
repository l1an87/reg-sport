import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {Connection} from "typeorm";
import {User} from "./entities/user.entity";
import {DatabaseModule} from "../database/database.module";
import {RolesModule} from "../roles/roles.module";

@Module({
    controllers: [UsersController],
    imports: [
        DatabaseModule,
        RolesModule,
    ],
    providers: [
        UsersService,
        {
            provide: 'USER_REPOSITORY',
            useFactory: (connection: Connection) => connection.getRepository(User),
            inject: ['DATABASE_CONNECTION'],
        },
    ],
    exports: [
        UsersService,
    ],
})
export class UsersModule {
}
