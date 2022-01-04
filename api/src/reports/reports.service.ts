import {Injectable} from '@nestjs/common';
import {MembersService} from "../members/members.service";
import {TeamsService} from "../teams/teams.service";
import {ReportTeam} from "./services/ReportTeam";
import {SportTypeService} from "../sport-type/sport-type.service";
import {ReportSport} from "./services/ReportSport";
import {ReportSportAll} from "./services/ReportSportAll";

@Injectable()
export class ReportsService {
    constructor(
        private teamsService: TeamsService,
        private membersService: MembersService,
        private sportTypeService: SportTypeService,
    ) {
    }

    async getReportTeam(id: number) {
        const team = await this.teamsService.findNotEmpty(id);
        const members = await this.membersService.findTeamAll(id);
        const report = new ReportTeam(team, members);

        return await report.generate();
    }

    async getReportSport() {
        const sports = await this.sportTypeService.findAll();
        const members = await this.membersService.findAll();
        const report = new ReportSport(sports, members.filter(i => i.admitted));

        return await report.generate();
    }

    async getReportMembersSport() {
        const sports = await this.sportTypeService.findAll();
        const members = await this.membersService.findAll();
        const report = new ReportSportAll(sports, members);

        return await report.generate();
    }
}
