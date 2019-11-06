import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Quest8Page } from '../quest8/quest8';

@IonicPage()
@Component({
  selector: 'page-quest7',
  templateUrl: 'quest7.html',
})
export class Quest7Page {
  resposta1: any;
  resposta2: any;
  resposta3: any;
  resposta4: any;
  resposta5: any;
  resposta6: any;
  bioForm: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

    this.resposta1 = this.navParams.data.resposta1;
    this.resposta2 = this.navParams.data.resposta2;
    this.resposta3 = this.navParams.data.resposta3;
    this.resposta4 = this.navParams.data.resposta4;
    this.resposta5 = this.navParams.data.resposta5;
    this.resposta6 = this.navParams.data.resposta6;

    this.bioForm = this.formBuilder.group({
      quest7: ['', Validators.required]
    });
  }

  nextPage() {
    this.navCtrl.push(Quest8Page, {
      resposta1: this.resposta1,
      resposta2: this.resposta2,
      resposta3: this.resposta3,
      resposta4: this.resposta4,
      resposta5: this.resposta5,
      resposta6: this.resposta6,
      resposta7: this.bioForm.value.quest7
    })
  }

}
