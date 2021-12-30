import {Injectable} from "@nestjs/common";
import {UsersService} from "../../users/users.service";
import {RolesService} from "../../roles/roles.service";

@Injectable()
export class Seeder {
    constructor(
        private readonly usersService: UsersService,
        private readonly rolesService: RolesService,
    ) {
    }

    async seed() {
        await this.addRoles();
        await this.addUsers();

    }

    async addRoles() {
        await this.rolesService.create({
            code: 'ADMIN',
            description: 'Администратор',
        });
        await this.rolesService.create({
            code: 'TEAM',
            description: 'Менеджер',
        });
        await this.rolesService.create({
            code: 'SPORT',
            description: 'Судья',
        });
        await this.rolesService.create({
            code: 'USER',
            description: 'Пользователь',
        });
    }

    async addUsers() {
        const role = await this.rolesService.findByCode('ADMIN');
        await this.usersService.create({
            email: 'l1an@bk.ru',
            password: 'cgjhn#01955',
            isBanned: false,
            roles: [role],
        });
    }
}
