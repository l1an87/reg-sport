import {Role} from "../../roles/entities/role.entity";

export class UserSanitize {
    id: number;
    email: string;
    isBanned: boolean;
    roles: Role[];
}
