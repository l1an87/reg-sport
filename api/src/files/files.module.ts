import {Module} from '@nestjs/common';
import {FilesService} from './files.service';
import {DatabaseModule} from "../database/database.module";
import {Connection} from "typeorm";
import {File} from "./file.entity";
import {FilesController} from './files.controller';

@Module({
    imports: [
        DatabaseModule,
    ],
    providers: [
        FilesService,
        {
            provide: 'FILE_REPOSITORY',
            useFactory: (connection: Connection) => connection.getRepository(File),
            inject: ['DATABASE_CONNECTION'],
        },
    ],
    exports: [
        FilesService,
    ],
    controllers: [FilesController],
})
export class FilesModule {
}
