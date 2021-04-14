/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { AppGateway } from "./app.gateway";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { CoinsModule } from "./coins/coins.module";
import { Module, HttpModule } from "@nestjs/common";

@Module({
    imports: [HttpModule, CoinsModule],
    controllers: [AppController],
    providers: [AppService, AppGateway],
})
export class AppModule {}
