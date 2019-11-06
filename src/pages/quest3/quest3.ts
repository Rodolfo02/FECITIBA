import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quest4Page } from '../quest4/quest4';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-quest3',
  templateUrl: 'quest3.html',
})
export class Quest3Page {

  bioForm;
  quest3;
  resposta1: any;
  resposta2: any;
  pontuacao: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

    this.resposta1 = this.navParams.data.resposta1;
    this.resposta2 = this.navParams.data.resposta2;

    this.bioForm = this.formBuilder.group({
      quest3: ['', Validators.required]
    });

  }

  nextPage() {

    const animationsOptions = {
      animation: 'ios-transition'
    }

    this.navCtrl.push(Quest4Page, {
      resposta1: this.resposta1,
      resposta2: this.resposta2,
      resposta3: this.bioForm.value.quest3
    }, animationsOptions)
  }

}
