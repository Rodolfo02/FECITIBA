import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Quest5Page } from '../quest5/quest5';


@IonicPage()
@Component({
  selector: 'page-quest4',
  templateUrl: 'quest4.html',
})
export class Quest4Page {
  resposta3: any;
  resposta2: any;
  resposta1: any;
  bioForm: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

    this.resposta1 = this.navParams.data.resposta1,
    this.resposta2 = this.navParams.data.resposta2,
    this.resposta3 = this.navParams.data.resposta3

    this.bioForm = this.formBuilder.group({
      quest4: ['', Validators.required]
    });
  }

  nextPage() {
    this.navCtrl.push(Quest5Page, {
      resposta1: this.resposta1,
      resposta2: this.resposta2,
      resposta3: this.resposta3,
      resposta4: this.bioForm.value.quest4
    })
  }

}
