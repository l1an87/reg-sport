import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

import {User} from "./entities/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {LoginDto} from "../auth/dto/login.dto";
import {RolesService} from "../roles/roles.service";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    private relations = ["roles", 'team'];

    constructor(
        private rolesService: RolesService,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {
    }

    async create(dto: CreateUserDto): Promise<User> {
        await this.findNotEmail(dto.email);
        let createdUser = await this.beforeSave(this.userRepository.create(dto), dto.password);
        createdUser = await this.userRepository.save(createdUser);
        return this.beforeToEnd(createdUser);
    }

    async update(id: number, dto: UpdateUserDto): Promise<User> {
        const user = await this.findNotEmpty(id);
        const updatedUser = await this.beforeSave({
            ...user,
            ...dto,
        }, dto.password);

        return this.beforeToEnd(await this.userRepository.save(updatedUser));
    }

    async remove(id: number) {
        const user = await this.findNotEmpty(id);
        return await this.userRepository.remove(user);
    }

    async findAll(): Promise<User[]> {
        const {relations} = this;
        const users = await this.userRepository.find({relations});
        return users.map(this.beforeToEnd);
    }

    async findByPayload(payload: any) {
        const {email} = payload;
        const {relations} = this;
        const user = await this.userRepository.findOne({email}, {relations});
        return this.beforeToEnd(user);
    }

    async findById(id: number): Promise<User> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const {relations} = this;

        const user = await this.userRepository.findOne(id, {relations});

        return this.beforeToEnd(user);
    }

    async findByLogin(dto: LoginDto) {
        const {email, password} = dto;
        const {relations} = this;

        const user = await this.userRepository.findOne({email}, {relations});

        if (!user) {
            throw new HttpException('Не верный логин или пароль', HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
            return this.beforeToEnd(user)
        } else {
            throw new HttpException('Не верный логин или пароль', HttpStatus.BAD_REQUEST);
        }
    }

    async findNotEmail(email: string) {
        const user = await this.userRepository.findOne({email});
        if (user) {
            throw new HttpException('Пользователь уже существует', HttpStatus.BAD_REQUEST);
        }
    }

    async findNotEmpty(id: number) {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const {relations} = this;
        const user = await this.userRepository.findOne({id}, {relations});

        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
        }

        return user;
    }


    beforeToEnd(user: User): User {
        user.password = '';
        return user;
    }

    async beforeSave(user: User, password?: string): Promise<User> {
        if (password) {
            user.password = await this.hashPassword(password);
        }
        return user
    }

    async hashPassword(pass) {
        return await bcrypt.hash(pass, 10);
    }
}
