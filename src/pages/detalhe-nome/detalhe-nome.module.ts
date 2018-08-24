import { DetalheNomePage } from './detalhe-nome';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    DetalheNomePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheNomePage),
  ],
})
export class BlaPageModule {}
