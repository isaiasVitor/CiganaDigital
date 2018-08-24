
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TempoVividoPage } from './../pages/tempo-vivido/tempo-vivido';
import { SegredosdaciganaPage } from './../pages/segredosdacigana/segredosdacigana';
import { SignosPage } from './../pages/signos/signos';
import { DetalheSignoPage } from './../pages/detalhe-signo/detalhe-signo';
import { DetalheNomePage } from './../pages/detalhe-nome/detalhe-nome';
import { SignificadoNomePage } from './../pages/significado-nome/significado-nome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { DeviceAccounts } from '@ionic-native/device-accounts';
import { NetworkInterface } from '@ionic-native/network-interface';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalheNomePage,
    SignificadoNomePage,
    DetalheSignoPage,
    SignosPage,
    SegredosdaciganaPage,
    TempoVividoPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetalheNomePage,
    SignificadoNomePage,
    DetalheSignoPage,
    SignosPage,
    SegredosdaciganaPage,
    TempoVividoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    Geolocation,
    GoogleMaps,
    Camera,
    Device,
    DeviceAccounts,
    NetworkInterface
    
  ]
})
export class AppModule {}
