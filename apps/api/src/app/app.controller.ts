/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { AppService } from "./app.service";
import { Message } from "@bcb/api-interfaces";
import { Controller, Get, } from "@nestjs/common";

@Controller()
export class AppController {

    constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
