import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    'BRL': {
      symbol: string;
      description: string;
      rate_float: number;
      rate: string;
    }
  };
}

interface PriceUpdate {
  timestamp: Date;
  BRL: number;
}

@Injectable()
export class BitcoinService {
  myBitcoins: number = 0;

  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];
  constructor(private http: HttpClient) {
    this.update();
    setInterval(
      () => {
        this.update();
      }, 60000
    );
  }

  update() {
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
      this.updateList.push({
        timestamp: this.lastUpdate,
        BRL: this.currentPrice.bpi.BRL.rate_float
      });
    });
  }

  getValorizacao(){
    if(!this.currentPrice) return 0;
    let valorAtual = this.currentPrice.bpi.BRL.rate_float;
    let valorInicial = this.updateList[0].BRL;
    return 100 * ((valorAtual-valorInicial)/valorInicial);
  }

}