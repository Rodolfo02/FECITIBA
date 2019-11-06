import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Quest6Page } from '../quest6/quest6';


@IonicPage()
@Component({
  selector: 'page-quest5',
  templateUrl: 'quest5.html',
})
export class Quest5Page {
  resposta1: any;
  resposta2: any;
  resposta3: any;
  resposta4: any;
  bioForm: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder) {
                
    this.resposta1 = this.navParams.data.resposta1;
    this.resposta2 = this.navParams.data.resposta2;
    this.resposta3 = this.navParams.data.resposta3;
    this.resposta4 = this.navParams.data.resposta4;

    this.bioForm = this.formBuilder.group({
      quest5: ['', Validators.required]
    });

  }

  nextPage() {
    this.navCtrl.push(Quest6Page, {
      resposta1: this.resposta1,
      resposta2: this.resposta2,
      resposta3: this.resposta3,
      resposta4: this.resposta4,
      resposta5: this.bioForm.value.quest5
    })
  }

}
