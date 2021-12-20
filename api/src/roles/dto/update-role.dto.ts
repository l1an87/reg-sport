import {IsOptional, IsString, MinLength} from "class-validator";

export class UpdateRoleDto {
    @IsOptional()
    @IsString({message: 'Код: должен быть строкой'})
    @MinLength(4, {message: 'Код: не менее 4'})
    code: string;

    @IsOptional()
    @IsString({message: 'Описание: должен быть строкой'})
    @MinLength(4, {message: 'Описание: не менее 4'})
    description: string;
}
