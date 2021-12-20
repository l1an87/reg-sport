import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

import {User} from "./entities/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {SanitizeUserDto} from "./dto/sanitize-user.dto";
import {LoginDto} from "../auth/dto/login.dto";
import {RolesService} from "../roles/roles.service";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    private relations = ["roles"];

    constructor(
        private rolesService: RolesService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {
    }

    async create(dto: CreateUserDto): Promise<SanitizeUserDto> {
        const {email} = dto;

        const user = await this.userRepository.findOne({email});

        if (user) {
            throw new HttpException('Пользователь уже существует', HttpStatus.BAD_REQUEST);
        }

        const password = await this.hashPassword(dto.password);

        const createdUser = this.userRepository.create({...dto, password});
        await this.userRepository.save(createdUser);

        return this.sanitizeUser(createdUser);
    }

    async update(id: number, dto: UpdateUserDto): Promise<SanitizeUserDto> {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
        }

        const {password, ...noPassDto} = dto

        const updatedDto = {
            ...user,
            ...noPassDto,
        }

        if (password) {
            updatedDto.password = await this.hashPassword(password);
        }

        const updatedUser = await this.userRepository.save(updatedDto);

        return this.sanitizeUser(updatedUser);
    }

    async remove(id: number) {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
        }

        return await this.userRepository.remove(user);
    }

    async findAll(): Promise<SanitizeUserDto[]> {
        const {relations} = this;
        const users = await this.userRepository.find({relations});
        return users.map(this.sanitizeUser);
    }

    async findByPayload(payload: any) {
        const {email} = payload;
        const {relations} = this;
        const user = await this.userRepository.findOne({email}, {relations});
        return this.sanitizeUser(user);
    }

    async findById(id: number): Promise<SanitizeUserDto> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }
        const {relations} = this;

        const user = await this.userRepository.findOne(id, {relations});

        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
        }

        return this.sanitizeUser(user);
    }

    async findByLogin(dto: LoginDto) {
        const {email, password} = dto;
        const {relations} = this;

        const user = await this.userRepository.findOne({email}, {relations});

        if (!user) {
            throw new HttpException('Не верный логин или пароль', HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
            return this.sanitizeUser(user)
        } else {
            throw new HttpException('Не верный логин или пароль', HttpStatus.BAD_REQUEST);
        }
    }

    sanitizeUser(user: User): SanitizeUserDto {
        const {password, ...sanitize} = user;
        return sanitize;
    }

    async hashPassword(pass) {
        return await bcrypt.hash(pass, 10);
    }
}
