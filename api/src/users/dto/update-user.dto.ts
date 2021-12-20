import {Role} from "../../roles/entities/role.entity";
import {IsEmail, IsOptional, IsString, MinLength} from "class-validator";

export class UpdateUserDto {
    @IsEmail({}, {message: 'Email: не корректный email'})
    @IsString({message:'Email: должен быть строкой'})
    readonly email: string;

    @IsOptional()
    @MinLength(8, {message:'Пароль: не менее 8'})
    @IsString({message:'Пароль: должен быть строкой'})
    readonly password: string;

    @IsOptional()
    readonly roles: Role[];

    @IsOptional()
    readonly isBanned: boolean;
}
