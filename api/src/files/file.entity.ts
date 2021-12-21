import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalname: string;

    @Column()
    mimetype: string;

    @Column({
        type: 'bytea',
    })
    buffer: Buffer;

    @Column({
        nullable: true,
    })
    encoding: string;

    @Column({
        nullable: true,
    })
    size: number;
}
