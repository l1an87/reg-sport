import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {sign} from "jsonwebtoken";
import {SanitizeUserDto} from "../users/dto/sanitize-user.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {LoginDto} from "./dto/login.dto";
import {RolesService} from "../roles/roles.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private rolesService: RolesService,
    ) {
    }

    async validateUser(payload) {
        return await this.usersService.findByPayload(payload);
    }

    async signPayload(user: SanitizeUserDto) {
        return sign(user, process.env.SECRET_KEY, {expiresIn: '7d'});
    }

    async createUser(dto: CreateUserDto) {
        const role = await this.rolesService.findByCode('USER');
        return await this.usersService.create({
            ...dto,
            roles: [
                role,
            ]
        });
    }

    async singIn(dto: LoginDto) {
        return await this.usersService.findByLogin(dto);
    }

    async findUser(id: number) {
        return await this.usersService.findById(id);
    }
}
