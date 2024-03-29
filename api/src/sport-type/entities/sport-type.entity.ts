import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class SportType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        default: 0,
    })
    limit: number;
}
