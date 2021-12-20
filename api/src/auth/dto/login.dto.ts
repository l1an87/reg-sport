import {IsEmail, IsString, MinLength} from "class-validator";

export class LoginDto {
    @IsEmail({}, {message: 'Email: не корректный email'})
    @IsString({message:'Email: должен быть строкой'})
    email: string;

    @MinLength(8, {message:'Пароль: не менее 8'})
    @IsString({message:'Пароль: должен быть строкой'})
    password: string;
}
