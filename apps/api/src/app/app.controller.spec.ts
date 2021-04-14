/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Test, TestingModule } from "@nestjs/testing";

describe('AppController', () => {

    let app: TestingModule;


    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();
    });


    describe('getData', () => {

        it('should return "Welcome to api!"', () => {
            const appController = app.get<AppController>(AppController);
            expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
        });
    });
});
