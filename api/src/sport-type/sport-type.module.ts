import {Module} from '@nestjs/common';
import {SportTypeController} from './sport-type.controller';
import {SportTypeService} from './sport-type.service';
import {Connection} from "typeorm";
import {SportType} from "./entities/sport-type.entity";
import {DatabaseModule} from "../database/database.module";

@Module({
    controllers: [SportTypeController],
    imports: [
        DatabaseModule,
    ],
    providers: [
        SportTypeService,
        {
            provide: 'SPORT_TYPE_REPOSITORY',
            useFactory: (connection: Connection) => connection.getRepository(SportType),
            inject: ['DATABASE_CONNECTION'],
        },
    ],
    exports: [
        SportTypeService,
    ],
})
export class SportTypeModule {
}
