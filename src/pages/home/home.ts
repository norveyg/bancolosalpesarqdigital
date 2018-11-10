import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoRegistro(){
    this.navCtrl.push(LoginPage);
  }

  gotoInicio(){
    this.navCtrl.push(InicioPage);
  }

}
