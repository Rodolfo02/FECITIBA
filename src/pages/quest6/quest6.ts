import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Quest7Page } from '../quest7/quest7';

@IonicPage()
@Component({
  selector: 'page-quest6',
  templateUrl: 'quest6.html',
})
export class Quest6Page {

  bioForm: any;
  resposta1: any;
  resposta2: any;
  resposta3: any;
  resposta4: any;
  resposta5: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder) {

    this.resposta1 = this.navParams.data.resposta1;
    this.resposta2 = this.navParams.data.resposta2;
    this.resposta3 = this.navParams.data.resposta3;
    this.resposta4 = this.navParams.data.resposta4;
    this.resposta5 = this.navParams.data.resposta5;

    this.bioForm = this.formBuilder.group({
      quest6: ['', Validators.required]
    });
  }

  nextPage() {
    this.navCtrl.push(Quest7Page,{
      resposta1: this.resposta1,
      resposta2: this.resposta2,
      resposta3: this.resposta3,
      resposta4: this.resposta4,
      resposta5: this.resposta5,
      resposta6: this.bioForm.value.quest6
    })
  }

}
