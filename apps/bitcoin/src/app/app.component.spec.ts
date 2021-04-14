/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async, } from "@angular/core/testing";


describe('AppComponent', () => {

    let service: HttpService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [HttpClientModule, HttpClientTestingModule],
        }).compileComponents();

        service = TestBed.inject(HttpService);
    }));


    it('should create the http service for the app', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service).toBeTruthy();

    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have getTimeIntervalPrices function', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.getTimeIntervalPrices).toBeTruthy();
    });


    it('should have onPeriodChange function', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.onPeriodChange).toBeTruthy();
    });


    it('should have onSelectTimeInterval function', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.onSelectTimeInterval).toBeTruthy();
    });

    it('should have ngAfterViewInit function', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.ngAfterViewInit).toBeTruthy();
    });

});
