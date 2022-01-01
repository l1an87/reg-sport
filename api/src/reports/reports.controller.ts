import {Controller, Get, Param, Response, StreamableFile} from '@nestjs/common';
import {ReportsService} from "./reports.service";
import {Roles} from "../auth/roles-auth.decorator";

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {
    }

    @Get('team/:id')
    @Roles('ADMIN', 'TEAM')
    async getReportTeam(
        @Response({passthrough: true}) res,
        @Param('id') id: string
    ) {
        const wb = await this.reportsService.getReportTeam(+id);
        const buffer = await wb.writeToBuffer();
        res.header('Content-disposition', 'attachment; filename=sadsad.xlsx');
        res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        return new StreamableFile(buffer);
    }

    @Get('sports')
    @Roles('ADMIN')
    async getReportSport(
        @Response({passthrough: true}) res,
        @Param('id') id: string
    ) {
        const wb = await this.reportsService.getReportSport();
        const buffer = await wb.writeToBuffer();
        res.header('Content-disposition', 'attachment; filename=asdsad.xlsx');
        res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        return new StreamableFile(buffer);
    }
}
