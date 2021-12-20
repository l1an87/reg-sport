import {IsString, MinLength} from "class-validator";

export class CreateRoleDto {
    @IsString({message: 'Код: должен быть строкой'})
    @MinLength(4, {message: 'Код: не менее 4'})
    code: string;

    @IsString({message: 'Описание: должен быть строкой'})
    description: string;
}
