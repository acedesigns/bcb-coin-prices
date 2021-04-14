/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AppGateway } from './app.gateway';

describe('AppGateway', () => {

    let gateway: AppGateway;


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppGateway],
        }).compile();

        gateway = module.get<AppGateway>(AppGateway);
    });


    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });

});
