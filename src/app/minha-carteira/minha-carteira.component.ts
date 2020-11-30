import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-minha-carteira',
  templateUrl: './minha-carteira.component.html',
  styleUrls: ['./minha-carteira.component.css']
})
export class MinhaCarteiraComponent implements OnInit {
  valor: number = 0.00;

  constructor(public bitcoinService: BitcoinService) { }

  ngOnInit() {
  }

  negociar(){
    this.bitcoinService.myBitcoins = this.bitcoinService.myBitcoins + this.valor;

    this.valor = 0;
  }

  getBRL(){
    return this.bitcoinService.myBitcoins * this.bitcoinService.currentPrice.bpi.BRL.rate_float;
  }

}