import {IsNumber, IsString} from "class-validator";

export class CreateSportTypeDto {
    @IsString({message:'Название: должен быть строкой'})
    name: string;

    @IsNumber({},{message:'Лимит: должен быть числом'})
    limit: number;
}
