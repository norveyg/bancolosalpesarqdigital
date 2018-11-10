import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresaInfoPage } from './ingresa-info';

@NgModule({
  declarations: [
    IngresaInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(IngresaInfoPage),
  ],
})
export class IngresaInfoPageModule {}
