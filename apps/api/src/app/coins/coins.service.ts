/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AxiosResponse } from "axios";
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';
import { Injectable, HttpService, NotFoundException } from '@nestjs/common';

const API_URL = "https://min-api.cryptocompare.com/data";

@Injectable()
export class CoinsService {

    allCoins = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'ETC'];
    allCurrencies = ['USD', 'GBP', 'EUR', 'JPY', 'ZAR'];

    constructor( private readonly httpService: HttpService ) {}


    findAll(): Observable<AxiosResponse> {
        return this.httpService.get(`${API_URL}/pricemultifull?fsyms=${this.allCoins}&tsyms=${this.allCurrencies}`)
            .pipe(
                map(res=> res.data)
            );
    }


    findOne(coin: string, time: string, currency: string): Observable<AxiosResponse> {
        const ourCoin = this.httpService.get(`${API_URL}/v2/${time}?fsym=${coin}&tsym=${currency}&limit=10`).pipe(map(res => res.data));

        if (!ourCoin) {
            throw new NotFoundException();
        }
        return ourCoin;
    }

    /*
    create(createCoinDto: CreateCoinDto) {
        return 'This action adds a new coin';
    }
    update(id: number, updateCoinDto: UpdateCoinDto) {
        return `This action updates a #${id} coin`;
    }

    remove(id: number) {
        return `This action removes a #${id} coin`;
    }
    */
}
