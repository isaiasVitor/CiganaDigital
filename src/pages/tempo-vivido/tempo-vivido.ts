import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the TempoVividoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tempo-vivido',
  templateUrl: 'tempo-vivido.html',
})
export class TempoVividoPage {
  
  public userTempo:UserTempo;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.userTempo = new UserTempo;
  }

  gerarTempodeVida(){
    
    this.userTempo.idade = 'Você tem: ' + moment().diff(this.userTempo.aniversario,'year') + ' anos';
    this.userTempo.meses = 'Você já viveu: ' + moment().diff(this.userTempo.aniversario,'month') + ' meses';
    this.userTempo.semanas = 'Você já viveu: ' + moment().diff(this.userTempo.aniversario,'week') + ' semanas';
    this.userTempo.dias = 'Você já viveu: ' + moment().diff(this.userTempo.aniversario,'day') + ' dias';
    setInterval(() =>{
      this.atualiza(), 50;
    
    });
    }
    atualiza(){
      
      this.userTempo.segundos = 'Você já viveu: ' + moment().diff(this.userTempo.aniversario,'second') + ' segundos';
      this.userTempo.milisegundos= 'Você já viveu: ' + moment().diff(this.userTempo.aniversario,'millisecond') + ' milisegundos';
  
    }

}

export class UserTempo{
aniversario:any
idade:any;
meses:any;
semanas:any;
dias:any;
segundos:any;
milisegundos:any;
}