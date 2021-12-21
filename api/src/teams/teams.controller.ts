import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {Roles} from "../auth/roles-auth.decorator";
import {TeamsService} from "./teams.service";
import {CreateTeamDto} from "./dto/create-team.dto";
import {UpdateTeamDto} from "./dto/update-team.dto";

@Controller('teams')
export class TeamsController {
    constructor(
        private teamsService: TeamsService,
    ) {
    }

    @Get()
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async findAll() {
        return this.teamsService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN', 'TEAM')
    async findOne(@Param('id') id: string) {
        return this.teamsService.findById(+id);
    }

    @Post()
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    create(@Body() dto: CreateTeamDto) {
        return this.teamsService.create(dto);
    }

    @Patch(':id')
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateTeamDto,
    ) {
        return this.teamsService.update(+id, dto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async remove(@Param('id') id: string) {
        await this.teamsService.remove(+id);
        return {
            success: true,
        };
    }
}
