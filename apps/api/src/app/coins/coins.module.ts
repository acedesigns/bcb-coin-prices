/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { CoinsService } from "./coins.service";
import { CoinsController } from "./coins.controller";
import { Module, HttpModule } from "@nestjs/common";

@Module({
    imports: [HttpModule],
    controllers: [CoinsController],
    providers: [CoinsService]
})
export class CoinsModule {}
