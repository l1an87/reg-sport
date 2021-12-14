import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {UpdateRoleInput} from "./dto/update-role.input";
import {CreateRoleInput} from "./dto/create-role.input";
import {AuthGuard} from "@nestjs/passport";

@Controller('roles')
export class RolesController {
    constructor(
        private rolesService: RolesService,
    ) {
    }

    @Post()
    @UseGuards(AuthGuard("jwt"))
    create(@Body() dto: CreateRoleInput) {
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

    @Patch()
    @UseGuards(AuthGuard("jwt"))
    async update(@Body() dto: UpdateRoleInput) {
        return this.rolesService.update(dto);
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
