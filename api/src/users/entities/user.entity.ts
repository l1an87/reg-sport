import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../../roles/entities/role.entity";


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

    @ManyToMany(()=> Role)
    @JoinTable()
    roles: Role[];
}