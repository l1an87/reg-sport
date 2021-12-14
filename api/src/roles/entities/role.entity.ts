import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 20,
        unique: true,
    })
    code: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    description: string;
}