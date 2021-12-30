import {Module} from '@nestjs/common';
import {MembersController} from './members.controller';
import {MembersService} from './members.service';
import {Connection} from "typeorm";
import {Member} from "./entities/member.entity";
import {DatabaseModule} from "../database/database.module";
import {FilesModule} from "../files/files.module";

@Module({
    imports: [
        DatabaseModule,
        FilesModule,
    ],
    controllers: [MembersController],
    providers: [
        MembersService,

        {
            provide: 'MEMBER_REPOSITORY',
            useFactory: (connection: Connection) => connection.getRepository(Member),
            inject: ['DATABASE_CONNECTION'],
        },
    ],
    exports: [
        MembersService,
    ],
})
export class MembersModule {
}
