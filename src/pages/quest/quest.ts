import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Quest2Page } from '../quest2/quest2';

@IonicPage()
@Component({
  selector: 'page-quest',
  templateUrl: 'quest.html',
})
export class QuestPage {

  bioForm;
  quest;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder) {
    
    this.bioForm = this.formBuilder.group({
      quest: ['', Validators.required]
    })
  }

  nextPage () {
    
    this.navCtrl.push(Quest2Page, {
      resposta1: this.bioForm.value.quest
    });
  }

}
