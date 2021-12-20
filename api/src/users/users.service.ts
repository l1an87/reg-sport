import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

import {User} from "./entities/user.entity";
import {CreateUserInput} from "./dto/create-user.input";
import {UserSanitize} from "./dto/user.sanitize";
import {LoginInput} from "../auth/dto/login.input";
import {RolesService} from "../roles/roles.service";
import {UpdateUserInput} from "./dto/update-user.input";

@Injectable()
export class UsersService {
    private relations = ["roles"];

    constructor(
        private rolesService: RolesService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {
    }

    async create(dto: CreateUserInput): Promise<UserSanitize> {
        if (!dto.email) {
            throw new HttpException('Email не задан', HttpStatus.BAD_REQUEST);
        }
        if (!dto.password) {
            throw new HttpException('Пароль не задан', HttpStatus.BAD_REQUEST);
        }

        const {email} = dto;

        const user = await this.userRepository.findOne({email});

        if (user) {
            throw new HttpException('Пользователь уже существует', HttpStatus.BAD_REQUEST);
        }

        const password = await bcrypt.hash(dto.password, 10);

        const createdUser = this.userRepository.create({...dto, password});
        await this.userRepository.save(createdUser);

        return this.sanitizeUser(createdUser);
    }

    async update(dto: UpdateUserInput): Promise<UserSanitize> {
        const {id} = dto;
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
        }

        const updatedUser = await this.userRepository.save({
            ...user,
            ...dto,
        });

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

    async findAll(): Promise<UserSanitize[]> {
        const users = await this.userRepository.find();

        return users.map(this.sanitizeUser);
    }

    async findByPayload(payload: any) {
        const {email} = payload;
        const {relations} = this;
        const user = await this.userRepository.findOne({email}, {relations});
        return this.sanitizeUser(user);
    }

    async findById(id: number): Promise<UserSanitize> {
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

    async findByLogin(dto: LoginInput) {
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

    sanitizeUser(user: User): UserSanitize {
        const {password, ...sanitize} = user;
        return sanitize;
    }
}
