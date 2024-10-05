import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface Stock{
  'Code':string
  'ISU_CD':string
  'Name':string
  'Market':string
  'Dept':string
  'Close':string
  'ChangeCode':string
  'Changes':number
  'ChagesRatio':number
  'Open':number
  'High':number
  'Low':number
  'Volume':number
  'Amount':number
  'Marcap':number
  'Stocks':number
  'MarketId':string
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/indices/:indice')
  // async getIndice(@Param('indice') indice:string): Promise<any[]> {
  //   if(indice === 'kospi'){
  //     return this.appService.getIndice()['kospi'];
  //   } else if(indice === 'kosdaq'){
  //     return this.appService.getIndice()['kosdaq']
  //   } else if (indice === 'kospi200'){
  //     return this.appService.getIndice()['ks200'];
  //   }
    
  // }
  @Get('/indices')
  async getIndice():Promise<string>{
    return this.appService.getIndice()
  }
  @Get('/stocks')
  async getTodayStocksInfo(@Query('page') page:number,@Query('limit') limit:number):Promise<{today_stocks:Stock[],stocksLen:number}>{
    return this.appService.getTodayStocksInfo(page,limit)
  }
  // @Get('/stock')
  // async getStockInfo(@Query('code') code:string){
  //   return this.appService.getStockInfo(code);
  // }
}
