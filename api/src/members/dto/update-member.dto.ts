import {IsBoolean, IsEnum, IsISO8601, IsOptional, IsString, MinLength} from "class-validator";
import {MemberGender, MemberMedicalType} from "../entities/member.entity";
import {SportType} from "../../sport-type/entities/sport-type.entity";
import {Team} from "../../teams/entities/team.entity";

export class UpdateMemberDto {
    @MinLength(2, {message: 'Имя: не менее 2'})
    @IsString({message: 'Имя: должено быть строкой'})
    readonly firstName?: string;

    @MinLength(2, {message: 'Фамилия: не менее 2'})
    @IsString({message: 'Фамилия: должено быть строкой'})
    readonly lastName?: string;

    @IsString({message: 'Отчество: должено быть строкой'})
    readonly middleName?: string;

    @IsEnum(MemberGender, {message: 'Пол: не верное значение'})
    readonly gender?: MemberGender;

    @IsISO8601({}, {message: 'День рождения: должно быть датой'})
    readonly birthday?: Date;

    @IsISO8601({}, {message: 'Поступил на работу: должно быть датой'})
    readonly inJob?: Date;

    @IsString({message: 'Должность: должено быть строкой'})
    readonly position?: string;

    @IsEnum(MemberMedicalType, {message: 'Пол: не верное значение'})
    readonly medicalType?: MemberMedicalType;

    @IsBoolean({message: 'Допущен ГСК: должено быть булеан'})
    readonly admitted?: boolean;

    @IsOptional()
    readonly sportTypes?: SportType[];

    @IsOptional()
    readonly team?: Team;
}
