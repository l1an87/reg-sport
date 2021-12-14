import {ExtractJwt, Strategy, VerifiedCallback} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: any, done: VerifiedCallback) {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            return done(
                new HttpException('Не авторизованный доступ', HttpStatus.UNAUTHORIZED),
                false,
            );
        }
        if (user.isBanned) {
            return done(
                new HttpException('Вы заблокированы', HttpStatus.UNAUTHORIZED),
                false,
            );
        }
        return done(null, user, payload.iat);
    }
}