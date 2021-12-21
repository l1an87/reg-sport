import {IsEmail, IsString, MinLength} from "class-validator";

export class CreateTeamDto {
    @MinLength(3, {message: 'Название: не менее 3'})
    @IsString({message: 'Название: должено быть строкой'})
    readonly name: string;

    @IsEmail({}, {message: 'Email: не корректный email'})
    @IsString({message:'Email: должен быть строкой'})
    readonly email: string;

    @MinLength(8, {message:'Пароль: не менее 8'})
    @IsString({message:'Пароль: должен быть строкой'})
    readonly password: string;
}
