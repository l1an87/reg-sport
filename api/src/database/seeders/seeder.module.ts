import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {DatabaseModule} from "../database.module";
import {UsersModule} from "../../users/users.module";
import {RolesModule} from "../../roles/roles.module";
import {Seeder} from "./seeder";

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        DatabaseModule,
        RolesModule,
    ],
    controllers: [],
    providers: [Seeder],
})
export class SeederModule {
}