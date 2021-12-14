import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginInput} from "./dto/login.input";
import {CreateUserInput} from "../users/dto/create-user.input";
import {UserSanitize} from "../users/dto/user.sanitize";
import {Roles} from "./roles-auth.decorator";
import {User} from "../users/entities/user.entity";
import {CurrentUser} from "./current-user.decorator";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {
    }

    @Post('singup')
    async singUp(@Body() dto: CreateUserInput) {
        const user: UserSanitize = await this.authService.createUser(dto);

        const token = await this.authService.signPayload(user);

        return {user, token};
    }


    @Post('singin')
    async singIn(@Body() dto: LoginInput) {
        const user: UserSanitize = await this.authService.singIn(dto);

        const token = await this.authService.signPayload(user);

        return {user, token};
    }

    @Get('test')
    @Roles('ADMIN')
    async test() {
        return 'test';
    }

    @Get('current')
    async current(@CurrentUser() currentUser: User) {
        const user: UserSanitize = await this.authService.findUser(+currentUser.id);

        const token = await this.authService.signPayload(user);

        return {user, token};
    }
}
