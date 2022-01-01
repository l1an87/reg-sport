import {Module} from '@nestjs/common';
import {ReportsController} from './reports.controller';
import {ReportsService} from './reports.service';
import {TeamsModule} from "../teams/teams.module";
import {MembersModule} from "../members/members.module";
import {SportTypeModule} from "../sport-type/sport-type.module";

@Module({
    imports: [
        TeamsModule,
        MembersModule,
        SportTypeModule
    ],
    controllers: [ReportsController],
    providers: [ReportsService],
    exports: [
        ReportsService,
    ],
})
export class ReportsModule {
}

