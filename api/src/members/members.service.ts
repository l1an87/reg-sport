import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {Member} from "./entities/member.entity";
import {FilesService} from "../files/files.service";
import {CreateMemberDto} from "./dto/create-member.dto";
import {UpdateMemberDto} from "./dto/update-member.dto";

@Injectable()
export class MembersService {
    relations = ['team', 'sportTypes'];

    constructor(
        @Inject('MEMBER_REPOSITORY')
        private memberRepository: Repository<Member>,
        private filesService: FilesService,
    ) {
    }

    async create(dto: CreateMemberDto, teamId?: number): Promise<Member> {
        const member = this.memberRepository.create(dto);
        this.verificationTeam(member, teamId);
        return await this.memberRepository.save(member);
    }

    async update(id: number, dto: UpdateMemberDto, teamId?: number): Promise<Member> {
        const member = await this.findNotEmpty(id);
        this.verificationTeam(member, teamId);

        return await this.memberRepository.save({
            ...member,
            ...dto,
        });
    }

    async remove(id: number, teamId?: number) {
        const member = await this.findNotEmpty(id);
        this.verificationTeam(member, teamId);
        return await this.memberRepository.remove(member);
    }

    async admitted(id: number): Promise<Member> {
        const member = await this.findNotEmpty(id);
        member.admitted = !member.admitted;
        return await this.memberRepository.save(member);
    }

    async findAll(): Promise<Member[]> {
        const {relations} = this;
        return await this.memberRepository.find({relations});
    }

    async findById(id: number, teamId?: number): Promise<Member> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }
        const {relations} = this;
        const member = await this.memberRepository.findOne({id}, {relations});
        this.verificationTeam(member, teamId);

        return member;
    }

    async findTeamAll(id): Promise<Member[]> {
        const {relations} = this;
        return await this.memberRepository.find({
            where: {
                team: {id},
            },
            relations
        });
    }

    async findNotEmpty(id: number): Promise<Member> {
        if (!id) {
            throw new HttpException('Id не задан', HttpStatus.BAD_REQUEST);
        }

        const {relations} = this;
        const member = await this.memberRepository.findOne({id}, {relations});

        if (!member) {
            throw new HttpException('Участник не найден', HttpStatus.BAD_REQUEST);
        }

        return member;
    }

    async addPhoto(id: number, file: Express.Multer.File, teamId?: number) {
        const member = await this.findNotEmpty(id);
        this.verificationTeam(member, teamId);
        let currentFile;
        if (member.photoId) {
            currentFile = await this.filesService.update(member.photoId, file);
        } else {
            currentFile = await this.filesService.create(file);
        }
        member.photoId = currentFile.id;
        member.photoName = currentFile.originalname;
        await this.memberRepository.save(member);
        return {
            id: currentFile.id,
            name: currentFile.originalname,
        };
    }

    async addMedicalCertificate(id: number, file: Express.Multer.File, teamId?: number) {
        const member = await this.findNotEmpty(id);
        this.verificationTeam(member, teamId);
        let currentFile;
        if (member.medicalCertificateId) {
            currentFile = await this.filesService.update(member.medicalCertificateId, file);
        } else {
            currentFile = await this.filesService.create(file);
        }
        member.medicalCertificateId = currentFile.id;
        member.medicalCertificateName = currentFile.originalname;
        await this.memberRepository.save(member);
        return {
            id: currentFile.id,
            name: currentFile.originalname,
        };
    }

    verificationTeam(member: Member, teamId?: number) {
        if (teamId && teamId !== member.team.id) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
        }
    }
}
