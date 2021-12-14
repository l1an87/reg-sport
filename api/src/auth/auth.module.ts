import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";
import {DatabaseModule} from "../database/database.module";
import {RolesModule} from "../roles/roles.module";
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "./roles.guard";

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: {expiresIn: '1d'},
        }),
        DatabaseModule,
        UsersModule,
        RolesModule,
    ],
})
export class AuthModule {
}
