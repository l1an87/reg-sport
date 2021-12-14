import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {sign} from "jsonwebtoken";
import {UserSanitize} from "../users/dto/user.sanitize";
import {CreateUserInput} from "../users/dto/create-user.input";
import {LoginInput} from "./dto/login.input";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
    ) {
    }

    async validateUser(payload) {
        return await this.usersService.findByPayload(payload);
    }

    async signPayload(user: UserSanitize) {
        return sign(user, process.env.SECRET_KEY, {expiresIn: '7d'});
    }

    async createUser(dto: CreateUserInput) {
        return await this.usersService.create(dto);
    }

    async singIn(dto: LoginInput) {
        return await this.usersService.findByLogin(dto);
    }

    async findUser(id: number) {
        return await this.usersService.findById(id);
    }
}
