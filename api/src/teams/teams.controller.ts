import {
    Body, ClassSerializerInterceptor,
    Controller,
    Delete,
    Get, HttpException, HttpStatus,
    Param,
    Patch,
    Post, Request,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {Roles} from "../auth/roles-auth.decorator";
import {TeamsService} from "./teams.service";
import {CreateTeamDto} from "./dto/create-team.dto";
import {UpdateTeamDto} from "./dto/update-team.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('teams')
@UseGuards(AuthGuard("jwt"))
@UseInterceptors(ClassSerializerInterceptor)
@Roles('ADMIN')
export class TeamsController {
    constructor(
        private teamsService: TeamsService,
    ) {
    }

    @UseInterceptors(FileInterceptor('file'))
    @Post('add-medical-certificate/:id')
    @Roles('ADMIN', 'TEAM')
    async uploadFile(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
        @Request() req: any,
    ) {
        if (req.userSession.isRoleAdmin) {
            return this.teamsService.addMedicalCertificate(+id, file);
        }
        if (!req.userSession.teamId) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
        }
        return this.teamsService.addMedicalCertificate(+req.userSession.teamId, file);
    }


    @Get('test')
    async test(@Request() req: any) {
        return this.teamsService.findAll();
    }

    @Get()
    @Roles()
    async findAll() {
        return this.teamsService.findAll();
    }

    @Get(':id')
    @Roles('ADMIN', 'TEAM')
    async findOne(
        @Request() req: any,
        @Param('id') id: string,
    ) {
        if (req.userSession.isRoleAdmin) {
            return this.teamsService.findById(+id);
        }
        if (!req.userSession.teamId) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
        }
        return this.teamsService.findById(+req.userSession.teamId);
    }

    @Post()
    create(@Body() dto: CreateTeamDto) {
        return this.teamsService.create(dto);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateTeamDto,
    ) {
        return this.teamsService.update(+id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.teamsService.remove(+id);
        return {
            success: true,
        };
    }
}
