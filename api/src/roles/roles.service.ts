import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Role} from "./entities/role.entity";
import {UpdateRoleDto} from "./dto/update-role.dto";
import {CreateRoleDto} from "./dto/create-role.dto";

@Injectable()
export class RolesService {
    constructor(
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>
    ) {
    }

    async create(dto: CreateRoleDto): Promise<Role> {
        const {code} = dto;

        const role = await this.roleRepository.findOne({code});

        if (role) {
            throw new HttpException('Роль уже существует', HttpStatus.BAD_REQUEST);
        }

        const createdRole = this.roleRepository.create(dto);

        return await this.roleRepository.save(createdRole);
    }

    async update(id, dto: UpdateRoleDto): Promise<Role> {
        const role = await this.findById(id);

        return await this.roleRepository.save({
            ...role,
            ...dto,
        });
    }

    async remove(id: number){
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const role = await this.roleRepository.findOne(id);

        if (!role) {
            throw new HttpException('Роль не найдена', HttpStatus.BAD_REQUEST);
        }

        return await this.roleRepository.remove(role);
    }

    async findAll(): Promise<Role[]> {
        return await this.roleRepository.find();
    }

    async findById(id: number): Promise<Role> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }
        const role = await this.roleRepository.findOne(id);

        if (!role) {
            throw new HttpException('Роль не найдена', HttpStatus.BAD_REQUEST);
        }

        return role;
    }

    async findByCode(code: string): Promise<Role> {
        return await this.roleRepository.findOne({code});
    }
}
