import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Team} from "./entities/team.entity";
import {CreateTeamDto} from "./dto/create-team.dto";
import {RolesService} from "../roles/roles.service";
import {UsersService} from "../users/users.service";
import {UpdateTeamDto} from "./dto/update-team.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class TeamsService {
    private relations = ['user'];

    constructor(
        @Inject('TEAM_REPOSITORY')
        private teamRepository: Repository<Team>,
        private usersService: UsersService,
        private rolesService: RolesService,
        private filesService: FilesService,
    ) {
    }

    async create(dto: CreateTeamDto): Promise<Team> {
        await this.usersService.findNotEmail(dto.email);

        const {name} = dto;
        if (await this.teamRepository.findOne({name})) {
            throw new HttpException('Команда существует', HttpStatus.BAD_REQUEST);
        }

        const role = await this.rolesService.findByCode('TEAM');


        const team = this.teamRepository.create({
            name: dto.name,
            user: {
                email: dto.email,
                password: await this.usersService.hashPassword(dto.password),
                roles: [role],
            },
        });

        return await this.teamRepository.save(team);
    }

    async update(id: number, dto: UpdateTeamDto): Promise<Team> {
        const team = await this.findNotEmpty(id);

        return await this.teamRepository.save({
            ...team,
            ...dto,
        });
    }

    async remove(id: number) {
        const team = await this.findNotEmpty(id);
        if (team.medicalCertificateId) {
            await this.filesService.remove(team.medicalCertificateId);
        }

        return await this.teamRepository.remove(team);
    }

    async findAll() {
        const {relations} = this;
        return await this.teamRepository.find({relations});
    }

    async findById(id: number): Promise<Team> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const {relations} = this;

        return await this.teamRepository.findOne({id}, {relations});
    }

    async findNotEmpty(id: number): Promise<Team> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const {relations} = this;
        const team = await this.teamRepository.findOne({id}, {relations});

        if (!team) {
            throw new HttpException('Пользователь не найден', HttpStatus.BAD_REQUEST);
        }

        return team;
    }

    async addMedicalCertificate(id: number, file: Express.Multer.File) {
        const team = await this.findNotEmpty(id);
        let currentFile;
        if (team.medicalCertificateId) {
            currentFile = await this.filesService.update(team.medicalCertificateId, file);
        } else {
            currentFile = await this.filesService.create(file);
        }
        team.medicalCertificateId = currentFile.id;
        team.medicalCertificateName = currentFile.originalname;
        return await this.teamRepository.save(team);
    }
}
