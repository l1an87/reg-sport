import {SeederModule} from "./database/seeders/seeder.module";
import {NestFactory} from "@nestjs/core";
import {Seeder} from "./database/seeders/seeder";

async function bootstrap() {
    NestFactory.createApplicationContext(SeederModule)
        .then(appContext => {
            const seeder = appContext.get(Seeder);
            seeder
                .seed()
                .finally(() => appContext.close());
        })
        .catch(error => {
            throw error;
        });
}
bootstrap();
