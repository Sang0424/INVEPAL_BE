import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

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
}
