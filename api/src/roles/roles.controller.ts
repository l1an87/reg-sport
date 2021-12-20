import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {UpdateRoleDto} from "./dto/update-role.dto";
import {CreateRoleDto} from "./dto/create-role.dto";
import {AuthGuard} from "@nestjs/passport";

@Controller('roles')
export class RolesController {
    constructor(
        private rolesService: RolesService,
    ) {
    }

    @Post()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() dto: CreateRoleDto) {
        return this.rolesService.create(dto);
    }

    @Get()
    @UseGuards(AuthGuard("jwt"))
    async findAll() {
        return this.rolesService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard("jwt"))
    async findOne(@Param('id') id: string) {
        return this.rolesService.findById(+id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard("jwt"))
    async update(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
        return this.rolesService.update(+id, dto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard("jwt"))
    async remove(@Param('id') id: string) {
        await this.rolesService.remove(+id);
        return {
            success: true,
        };
    }
}
