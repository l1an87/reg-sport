import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../../roles/entities/role.entity";
import {Team} from "../../teams/entities/team.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 100,
        unique: true,
    })
    email: string;

    @Column({
        type: "varchar",
    })
    password: string;

    @Column({
        default: false,
    })
    isBanned: boolean;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];

    @OneToOne(() => Team, team => team.user, {onDelete: 'CASCADE'})
    @JoinColumn()
    team?: Team;
}
