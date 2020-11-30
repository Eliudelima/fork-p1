import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { MinhaCarteiraComponent } from './minha-carteira/minha-carteira.component';
import { RouterModule } from '@angular/router';
import { BircoinService } from './bircoin.service';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
    RouterModule.forRoot([
      {path:'bitcoin', component: BitcoinComponent},
      {path:'carteira', component: MinhaCarteiraComponent}
    ]) ],
  declarations: [ AppComponent, HelloComponent, BitcoinComponent, MinhaCarteiraComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BircoinService, BitcoinService]
})
export class AppModule { }
