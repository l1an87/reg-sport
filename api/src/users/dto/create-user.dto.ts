import {IsEmail, IsOptional, IsString, MinLength} from "class-validator";
import {Team} from "../../teams/entities/team.entity";
import {Role} from "../../roles/entities/role.entity";

export class CreateUserDto {
    @IsEmail({}, {message: 'Email: не корректный email'})
    @IsString({message:'Email: должен быть строкой'})
    readonly email: string;

    @MinLength(8, {message:'Пароль: не менее 8'})
    @IsString({message:'Пароль: должен быть строкой'})
    readonly password: string;

    @IsOptional()
    readonly roles?: Role[];

    @IsOptional()
    readonly team?: Team;

    @IsOptional()
    readonly isBanned?: boolean;
}
