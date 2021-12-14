import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {decode} from 'jsonwebtoken';

export const CurrentUser = createParamDecorator(
    (data: string, context: ExecutionContext) => {
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        const [bearer, token] = authHeader.split(' ');

        if (bearer !== 'Bearer' || !token) {
            return null;
        }
        const user: any = decode(token);

        return user; // extract a specific property only if specified or get a user object
    },
);