import { UserProvider } from './../../providers/user/user';
import { DetalheSignoPage } from './../detalhe-signo/detalhe-signo';
import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

/**
 * Generated class for the SignosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signos',
  templateUrl: 'signos.html',
})
export class SignosPage {
   signos:any;
  
  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    this.getAll();
    
   }
 
   getAll(){
       this.userProvider.getAllSignos()
       .then((result:any) => {
         this.signos = result.data;
       })
       .catch((error) => {
         console.log(error);
       })
   }

   detalheSigno(signo){
    
    this.navCtrl.push(DetalheSignoPage, {signo} );
   }
}
