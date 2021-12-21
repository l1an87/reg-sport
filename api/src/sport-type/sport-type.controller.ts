import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {SportTypeService} from "./sport-type.service";
import {AuthGuard} from "@nestjs/passport";
import {Roles} from "../auth/roles-auth.decorator";
import {UpdateSportTypeDto} from "./dto/update-sport-type.dto";
import {CreateSportTypeDto} from "./dto/create-sport-type.dto";

@Controller('sport-type')
@UseGuards(AuthGuard("jwt"))
@Roles('ADMIN')
export class SportTypeController {
    constructor(
        private sportTypeService: SportTypeService,
    ) {
    }

    @Post()
    create(@Body() dto: CreateSportTypeDto) {
        return this.sportTypeService.create(dto);
    }

    @Get()
    @Roles()
    async findAll() {
        return this.sportTypeService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.sportTypeService.findById(+id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateSportTypeDto,
    ) {
        return this.sportTypeService.update(+id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.sportTypeService.remove(+id);
        return {
            success: true,
        };
    }
}
