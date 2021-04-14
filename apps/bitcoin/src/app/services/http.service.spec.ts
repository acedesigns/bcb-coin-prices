/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { HttpService } from "./http.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

fdescribe('HttpService', () => {

    let service: HttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService]
        });
        service = TestBed.inject(HttpService);
    });


    it('should be created', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service).toBeTruthy();
    });


    it('should have getData function', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service.getData).toBeTruthy();
    });


    it('should have getIntervalData function', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service.getIntervalData).toBeTruthy();
    });


    it('should have postData function', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service.postData).toBeTruthy();
    });
});
