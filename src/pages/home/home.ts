import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestPage } from '../quest/quest';
import { CreditosPage } from '../creditos/creditos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  next () {

    const animationsOptions = {
      animation: 'ios-transition'
    }

    this.navCtrl.push(QuestPage, {}, animationsOptions);
  }

  creditoPage(){
    
    const animationsOptions = {
      animation: 'ios-transition'
    }

    this.navCtrl.push(CreditosPage, {}, animationsOptions)
  }

}
