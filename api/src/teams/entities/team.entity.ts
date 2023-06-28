import {Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";
import {Member} from "../../members/entities/member.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
    })
    name: string;

    @OneToOne(() => User, user => user.team, {cascade: ['insert'], onDelete: 'CASCADE'})
    user?: User;

    @OneToMany(() => Member, member => member.team, {cascade: ['insert'], onDelete: 'CASCADE'})
    members?: Member[];

    @Column({
        default: 0,
    })
    medicalCertificateId?: number;

    @Column({
        default: '',
    })
    medicalCertificateName?: string;

    @Column({
        default: '',
    })
    division?: string;
}
