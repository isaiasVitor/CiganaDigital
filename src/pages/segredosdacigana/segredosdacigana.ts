import { TempoVividoPage } from './../tempo-vivido/tempo-vivido';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-segredosdacigana',
  templateUrl: 'segredosdacigana.html',
})
export class SegredosdaciganaPage {
  public image: string;

  public idade: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,
              private camera: Camera,
              public loadingCtrl: LoadingController) {
           

  }

  ionViewDidLoad() {
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Espere, estou me contatando o submundo, sua morte esta proxima'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.idade = "Você viverá mais " + (Math.floor(Math.random() * 10) + 1) + " anos"; 
    }, 5000);                         
  }
 

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.presentLoadingDefault();
      
      }, (err) => {
        this.displayErrorAlert(err);
      });
      
     
  }

  displayErrorAlert(err){
    let alert = this.alertCtrl.create({
       subTitle: '<img src="../assets/imgs/boladecristalquebrada.jpg">'
     });
     alert.present();
    setTimeout(() => {
      alert.dismiss();

    }, 3000);
  }
  
  tempoVivido(){
    this.navCtrl.push(TempoVividoPage);
  }

}

export class Celular{
  nome:any;
  modelo:any;
  marca:any;
  ip:any;
}