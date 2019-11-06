import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Quest3Page } from '../quest3/quest3';


@IonicPage()
@Component({
  selector: 'page-quest2',
  templateUrl: 'quest2.html',
})
export class Quest2Page {

  bioForm;
  quest2
  resposta1: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder ) {

    this.resposta1 = this.navParams.data.resposta1;

    this.bioForm = this.formBuilder.group({
      quest2: ['', Validators.required]
    });


  }

  nextPage() {
    this.navCtrl.push(Quest3Page, {
      resposta1: this.resposta1,
      resposta2: this.bioForm.value.quest2
    })
  }

}
