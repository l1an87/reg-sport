import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {UsersService} from "./users.service";
import {CreateUserInput} from "./dto/create-user.input";
import {UpdateUserInput} from "./dto/update-user.input";
import {Roles} from "../auth/roles-auth.decorator";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) {
    }

    @Post()
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    create(@Body() dto: CreateUserInput) {
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

    @Patch()
    @UseGuards(AuthGuard("jwt"))
    @Roles('ADMIN')
    async update(@Body() dto: UpdateUserInput) {
        return this.usersService.update(dto);
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
