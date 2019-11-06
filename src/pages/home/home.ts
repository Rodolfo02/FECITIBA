import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestPage } from '../quest/quest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  next () {
    this.navCtrl.push(QuestPage, {});
  }

}
