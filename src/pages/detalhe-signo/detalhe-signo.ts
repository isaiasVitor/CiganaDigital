import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheSignoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-signo',
  templateUrl: 'detalhe-signo.html',
})
export class DetalheSignoPage {
  signo : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.signo = this.navParams.get('signo') || {}
  }
  
}
