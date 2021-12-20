import {IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateSportTypeDto {
    @IsString({message:'Название: должен быть строкой'})
    name: string;

    @IsOptional()
    @IsNumber({},{message:'Лимит: должен быть числом'})
    limit: number;
}
