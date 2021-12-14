import {Role} from "../../roles/entities/role.entity";

export class UpdateUserInput {
    readonly id: number;
    readonly email: string;
    readonly password: string;
    readonly roles: Role[];
}