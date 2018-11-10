import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResumenPage } from '../resumen/resumen';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the IngresaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresa-info',
  templateUrl: 'ingresa-info.html',
})
export class IngresaInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresaInfoPage');
  }

  gotoContinue1(){
        const alert = this.alertCtrl.create({
          title: Math.random()+'ALERTA!!!!!!',
          subTitle: 'Hemos detectado que estas en lista negra de datacredito. Debes corregir esto para continuar',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(ResumenPage);
  
  }

  gotoContinue(){
    if (Math.random() > 0.5) {
      this.navCtrl.push(ResumenPage); 
      } else {
        const alert = this.alertCtrl.create({
          title: 'ALERTA!!!!!!',
          subTitle: 'Hemos detectado que estas en lista negra de datacredito. Debes corregir esto para continuar',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(ResumenPage);
      }    
  }  

}
