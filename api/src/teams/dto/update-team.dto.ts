import {IsString, MinLength} from "class-validator";

export class UpdateTeamDto {
    @MinLength(3, {message: 'Название: не менее 3'})
    @IsString({message: 'Название: должено быть строкой'})
    readonly name: string;
}
