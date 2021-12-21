import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

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

    @Column({
        default: 0,
    })
    medicalCertificateId?: number;

    @Column({
        default: '',
    })
    medicalCertificateName?: String;
}
