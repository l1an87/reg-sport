import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AuthGuard} from "@nestjs/passport";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {Roles} from "../auth/roles-auth.decorator";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
@UseGuards(AuthGuard("jwt"))
@UseInterceptors(ClassSerializerInterceptor)
@Roles('ADMIN')
export class UsersController {
    constructor(
        private usersService: UsersService,
    ) {
    }

    @Get()
    async findAll() {
        return this.usersService.findAll();
    }

    @Get('ban/:id')
    async ban(@Param('id') id: string) {
        return this.usersService.ban(+id);
    }

    @Get('edit/:id')
    async edit(@Param('id') id: string) {
        return this.usersService.edit(+id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.usersService.findById(+id);
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto,
    ) {
        return this.usersService.update(+id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.usersService.remove(+id);
        return {
            success: true,
        };
    }
}
