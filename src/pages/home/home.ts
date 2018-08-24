import { SegredosdaciganaPage } from './../segredosdacigana/segredosdacigana';
import { SignosPage } from './../signos/signos';
import { SignificadoNomePage } from './../significado-nome/significado-nome';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {
   
  }

  signicadoNome(){
    this.navCtrl.push(SignificadoNomePage);
  }

  signos(){
    this.navCtrl.push(SignosPage);
  }

  segredoCigana(){
    this.navCtrl.push(SegredosdaciganaPage);
  }
}
