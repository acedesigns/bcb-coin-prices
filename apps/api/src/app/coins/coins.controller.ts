/* =======================================================
 *
 * Created by anele on 2021/04/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CreateCoinDto } from './dto/create-coin.dto';
import { UpdateCoinDto } from './dto/update-coin.dto';

@Controller('coins')
export class CoinsController {


    constructor(private readonly coinsService: CoinsService) {}


    @Get()
    findAll() {
        return this.coinsService.findAll();
    }

    @Get(':coin/:time/:currency')
    findOne(@Param('coin') coin: string, @Param('time') time: string, @Param('currency') currency: string ) {
        return this.coinsService.findOne(coin, time, currency);
    }

    /*
    @Post()
    create(@Body() createCoinDto: CreateCoinDto) {
        return this.coinsService.create(createCoinDto);
    }


    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoinDto: UpdateCoinDto) {
        return this.coinsService.update(+id, updateCoinDto);
    }


    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coinsService.remove(+id);
    }
    */

}
