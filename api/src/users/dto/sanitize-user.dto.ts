import {Role} from "../../roles/entities/role.entity";

export class SanitizeUserDto {
    id: number;
    email: string;
    isBanned: boolean;
    roles: Role[];
}
