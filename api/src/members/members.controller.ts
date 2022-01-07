import {
    Body,
    ClassSerializerInterceptor,
    Controller, Delete, Get, HttpException, HttpStatus,
    Param, Patch,
    Post, Request,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {Roles} from "../auth/roles-auth.decorator";
import {MembersService} from "./members.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateMemberDto} from "./dto/create-member.dto";
import {UpdateMemberDto} from "./dto/update-member.dto";

@Controller('members')
@UseGuards(AuthGuard("jwt"))
@UseInterceptors(ClassSerializerInterceptor)
@Roles('ADMIN', 'TEAM')
export class MembersController {
    constructor(
        private memberService: MembersService,
    ) {
    }

    @UseInterceptors(FileInterceptor('file'))
    @Post('add-medical-certificate/:id')
    async addMedicalCertificate(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
        @Request() req: any,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                return this.memberService.addMedicalCertificate(+id, file);
            },
            async (user) => {
                return this.memberService.addMedicalCertificate(+id, file, +user.teamId);
            },
        );
    }

    @UseInterceptors(FileInterceptor('file'))
    @Post('add-photo/:id')
    async addPhoto(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File,
        @Request() req: any,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                return this.memberService.addPhoto(+id, file);
            },
            async (user) => {
                return this.memberService.addPhoto(+id, file, +user.teamId);
            },
        );
    }

    @Get()
    @Roles('ADMIN', 'TEAM', 'SPORT')
    async findAll(
        @Request() req: any,
    ) {
        if (req.userSession.isRoleTeam) {
            return this.memberService.findTeamAll(+req.userSession.teamId);
        }
        return this.memberService.findAll();
    }


    @Roles('ADMIN')
    @Get('admitted/:id')
    async admitted(
        @Param('id') id: string,
    ) {
        return this.memberService.admitted(+id);
    }

    @Get('team/:id')
    async findTeamAll(
        @Param('id') id: string,
        @Request() req: any,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                return this.memberService.findTeamAll(+id);
            },
            async (user) => {
                if (+user.teamId !== +id) {
                    throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
                }
                return this.memberService.findTeamAll(+user.teamId);
            },
        );
    }


    @Get(':id')
    async findOne(
        @Request() req: any,
        @Param('id') id: string,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                return this.memberService.findById(+id);
            },
            async (user) => {
                if (+user.teamId !== +id) {
                    throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
                }
                return this.memberService.findById(+id, +req.userSession.teamId);
            },
        );
    }

    @Post()
    async create(
        @Request() req: any,
        @Body() dto: CreateMemberDto,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                return this.memberService.create(dto);
            },
            async (user) => {
                return this.memberService.create(dto, +user.teamId);
            },
        );
    }

    @Patch(':id')
    async update(
        @Request() req: any,
        @Param('id') id: string,
        @Body() dto: UpdateMemberDto,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                return this.memberService.update(+id, dto);
            },
            async (user) => {
                return this.memberService.update(+id, dto, +user.teamId);
            },
        );
    }

    @Delete(':id')
    async remove(
        @Request() req: any,
        @Param('id') id: string,
    ) {
        return await this.adminOrTeam(
            req,
            async () => {
                await this.memberService.remove(+id,);
                return {
                    success: true,
                };
            },
            async (user) => {
                await this.memberService.remove(+id, +user.teamId);
                return {
                    success: true,
                };
            },
        );
    }

    async adminOrTeam(req: any, onAdmin, onTeam) {
        if (req.userSession.isRoleAdmin) {
            return await onAdmin(req.userSession);
        }
        if (!req.userSession.teamId) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
        }
        return await onTeam(req.userSession);
    }
}
