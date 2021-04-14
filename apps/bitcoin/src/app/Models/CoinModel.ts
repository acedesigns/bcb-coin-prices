/**
 * Created by anele on 2021/04/13.
 */



export class RateLimitModel {}

export class InterValCoin {
    Response: string;
    Message: string;
    HasWarning: boolean;
    Type: number;
    RateLimit: RateLimitModel;
    Data: InterValCoinData

}

export class InterValCoinData {
    Aggregated: boolean;
    TimeFrom: Date;
    TimeTo: Date;
    Data: DATA
}

export class DATA {
    time: Date;
    high: number;
    low: number;
    open: number;
    volumefrom: number;
    volumeto: number;
    close: number;
    conversionType:string;
    conversionSymbol: string;
}