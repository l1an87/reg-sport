import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {File} from "./file.entity";

@Injectable()
export class FilesService {
    constructor(
        @Inject('FILE_REPOSITORY')
        private filesRepository: Repository<File>,
    ) {
    }

    async create(file: Express.Multer.File) {
        const createdFile = await this.validateFile(file);
        return await this.filesRepository.save(createdFile);
    }

    async update(id: number, file: Express.Multer.File) {
        if (!await this.filesRepository.count({id})) {
            return await this.create(file);
        }
        const validatedFile = await this.validateFile(file);
        return await this.filesRepository.save({
            ...validatedFile,
            id,
        });
    }

    async remove(id: number) {
        if (!await this.filesRepository.count({id})) {
            return;
        }
        const file = await this.filesRepository.create();
        file.id = id;
        await this.filesRepository.remove(file);
    }

    async findById(id: number) {
        return await this.filesRepository.findOne({id});
    }

    async validateFile(file): Promise<File> {
        if (!file) {
            throw new HttpException('Файл не найден', HttpStatus.BAD_REQUEST);
        }
        if (file.size > 20000000) {
            throw new HttpException('Размер файла слишком большой', HttpStatus.BAD_REQUEST);
        }
        return this.filesRepository.create({
            originalname: file.originalname,
            encoding: file.encoding,
            mimetype: file.mimetype,
            buffer: file.buffer,
            size: file.size,
        });
    }
}
