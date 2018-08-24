import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalhe-nome',
  templateUrl: 'detalhe-nome.html',
})
export class DetalheNomePage {
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.user = this.navParams.get('usuario') || {}
 
  }

}
