import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngresaInfoPage } from '../ingresa-info/ingresa-info';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoContinue(){
    this.navCtrl.push(IngresaInfoPage);
  }

  mostrarMensaje() {
    const alert = this.alertCtrl.create({
      title: 'Registro Exitoso!',
      subTitle: 'Ya puedes comenzar a usar la aplicación!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }

}
