/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Chart } from "chart.js";
import { Message } from "@bcb/api-interfaces";
import { HttpService } from "./services/http.service";
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

import { InterValCoin } from "./Models/CoinModel";

@Component({
    selector: 'bcb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {

    hello: any;
    pieChart: any;
    LineChart   = [];
    lineChartData: boolean = false;

    objectKeys = Object.keys;
    cryptoCoins: any;
    timeIntervalData: any;

    public filterTypes = [
        { value: 'histominute', display: 'Minutes' },
        { value: 'histohour', display: 'Hours' },
        { value: 'histoday', display: 'Days' },
    ];
    allCurrencies = [
        {val: 'USD', display: "US Dollar"},
        {val: 'GBP', display: "British Pound"},
        {val: 'EUR', display: "Euro"},
        {val: 'JPY', display: "Japanese Yen"},
        {val: 'ZAR', display: "South African Rand"}
    ];
    showCurrencyDroopDown: boolean = false;
    timePeriod: any;

    public refreshRate = [
        { value: '1second', display: 'Every Second' },
        { value: '1minute', display: 'Every Minute' },
        { value: '10min', display: 'Every 10 Minutes' },
        { value: 'manual', display: 'Manually' },
    ];

    @ViewChild('pieCanvas') private pieCanvas: ElementRef;
    constructor( private service: HttpService ) {}


    ngOnInit(): void {
        this.service.getData('/coins')
            .subscribe(
                (data) => {
                    this.cryptoCoins = data.RAW;
                },
            );
    }


    getTimeIntervalPrices(period: string, coin: string, currency: string) {
        return this.service.getIntervalData('/coins/', {interval:period, coin:coin, currency: currency} )
            .subscribe(
                (resp: any) => {
                    setTimeout(()=>{
                        //this.lineChartData = false;
                        this.timeIntervalData = resp.data;
                        this.timeIntervalData.currency = currency;
                        console.log(this.timeIntervalData);
                    }, 1000)

                }
            )
    }


    onPeriodChange( currency: string, coin: string, ) {
        this.lineChartData = true;
        this.getTimeIntervalPrices(this.timePeriod, coin, currency)
    }


    onSelectTimeInterval(period: string) {
        if(period == "" ) {
            this.showCurrencyDroopDown = false;
        } else {
            this.showCurrencyDroopDown = true;
            this.timePeriod = period;
        }
    }


    ngAfterViewInit(): void {}


    drawLineChart(data) {
        this.LineChart = new Chart(this.pieCanvas.nativeElement,{
            type: 'line',
            options: {
                title:{
                    text:"Chart Canvas",
                    display:true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            },
            data: {
                labels: ['Dollar', 'Pound', 'Yen', 'Euro', 'Rand'],
                //labels: data.map( (item) => item.RAW ),
                datasets:[
                    {
                        label: "My Dataset",
                        data: [65,59,80,81,56,],
                        fill:false,
                        borderColor: "rgb(75, 192, 192)",
                        lineTension: 0.1
                    }
                ]
            }
        });
    }

}
