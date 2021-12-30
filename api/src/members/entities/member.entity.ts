import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {SportType} from "../../sport-type/entities/sport-type.entity";
import {Team} from "../../teams/entities/team.entity";

export enum MemberGender {
    man = "М",
    woman = "Ж",
}

export enum MemberMedicalType {
    none = "",
    group = "group",
    personal = "personal",
}

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: '',
    })
    firstName: string;

    @Column({
        default: '',
    })
    lastName: string;

    @Column({
        default: '',
    })
    middleName: string;

    @Column({
        type: "enum",
        enum: MemberGender,
        default: MemberGender.man,
    })
    gender: MemberGender;

    @Column({
        nullable: true,
    })
    birthday: Date;

    @Column({
        nullable: true,
    })
    inJob: Date;

    @Column({
        default: '',
    })
    position: string;

    @Column({
        type: "enum",
        enum: MemberMedicalType,
        default: MemberMedicalType.none,
    })
    medicalType: MemberMedicalType;

    @Column({
        default: false,
    })
    admitted: boolean;

    @Column({
        default: 0,
        nullable: true,
    })
    medicalCertificateId?: number;

    @Column({
        default: '',
    })
    medicalCertificateName?: string;

    @Column({
        default: 0,
        nullable: true,
    })
    photoId?: number;

    @Column({
        default: '',
    })
    photoName?: string;


    @ManyToMany(() => SportType)
    @JoinTable()
    sportTypes: SportType[];

    @ManyToOne(() => Team, team => team.members, {onDelete: 'CASCADE'})
    @JoinColumn()
    team: Team;
}
