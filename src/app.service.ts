import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

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

@Injectable()
export class AppService {
  getIndice(): string {
    const filePath = path.join(__dirname, '..','..','..','./financial/krx_indices.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data;
  }
  getTodayStocksInfo(page:number,limit:number):{today_stocks:Stock[],stocksLen:number}{
    const filePath = path.join(__dirname, '..','..','..','./financial/today_krx_stocks.json');
    const data = JSON.parse(fs.readFileSync(filePath,'utf-8'));
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + Number(limit);
    return {today_stocks:data.slice(startIndex, endIndex),stocksLen:data.length};
  }
  getStockInfo(code:string){
    const filePath = path.join(__dirname, '..','..','..','./financial/krx_stocks.json');
    const data = JSON.parse(fs.readFileSync(filePath,'utf-8'));
    const result = data.filter((stock:string) => stock['Code'] === code);
    return result;
  }
}

