import {Role} from "../../roles/entities/role.entity";
import {Team} from "../../teams/entities/team.entity";

export class SanitizeUserDto {
    id: number;
    email: string;
    isBanned: boolean;
    roles?: Role[];
    team?: Team;
}
