import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {Roles} from "../auth/roles-auth.decorator";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) {
    }

    @Post()
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    create(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }

    @Get()
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async findOne(@Param('id') id: string) {
        return this.usersService.findById(+id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto,
    ) {
        return this.usersService.update(+id, dto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async remove(@Param('id') id: string) {
        await this.usersService.remove(+id);
        return {
            success: true,
        };
    }
}
