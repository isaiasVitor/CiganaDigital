import { DetalheNomePage } from './../detalhe-nome/detalhe-nome';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { UserProvider } from './../../providers/user/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the SignificadoNomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-significado-nome',
  templateUrl: 'significado-nome.html',
})
export class SignificadoNomePage {
  nomes:any;
  pesquisa:Pesquisa;
  validate:FormGroup;
  constructor(public navCtrl: NavController, public userProvider: UserProvider, public alertCtrl: AlertController) {
    this.pesquisa = new Pesquisa;
  }
  
  ngOnInit() {
    this.validate = new FormGroup({
      nome: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')])   
    });
  }
    
  getNome(){
    
    this.userProvider.getNome(this.pesquisa)
      .then((result:any) => {
        this.nomes = result.data;
      })
      .catch((error) => {
        this.showAlert();
      })
  }

  detalheNome(usuario){
    this.navCtrl.push(DetalheNomePage, {usuario} );
  } 
  
  showAlert() {
    const alert = this.alertCtrl.create({
      subTitle: '<div><img src=""></div>',
    });
    alert.present();
      
    
  }


}




export class Pesquisa{
  nome:any;
}


