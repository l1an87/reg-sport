import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {SportType} from "./entities/sport-type.entity";
import {CreateSportTypeDto} from "./dto/create-sport-type.dto";
import {UpdateSportTypeDto} from "./dto/update-sport-type.dto";

@Injectable()
export class SportTypeService {
    constructor(
        @Inject('SPORT_TYPE_REPOSITORY')
        private sportTypeRepository: Repository<SportType>,
    ) {
    }

    async create(dto: CreateSportTypeDto): Promise<SportType> {
        const sportType = this.sportTypeRepository.create(dto);
        return await this.sportTypeRepository.save(sportType);
    }

    async update(id:number, dto: UpdateSportTypeDto): Promise<SportType> {
        const sportType = await this.findById(id);
        return await this.sportTypeRepository.save({
            ...sportType,
            ...dto,
        });
    }

    async findById(id: number): Promise<SportType> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const sportType = await this.sportTypeRepository.findOne(id);

        if (!sportType) {
            throw new HttpException('Вид спорта не найден', HttpStatus.BAD_REQUEST);
        }

        return sportType;
    }

    async findAll(): Promise<SportType[]> {
        return await this.sportTypeRepository.find();
    }

    async remove(id: number) {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const sportType = await this.sportTypeRepository.findOne(id);

        if (!sportType) {
            throw new HttpException('Вид спорта не найден', HttpStatus.BAD_REQUEST);
        }

        return await this.sportTypeRepository.remove(sportType);
    }
}
