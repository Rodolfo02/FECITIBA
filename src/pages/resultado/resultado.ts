import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
  resposta1: any;
  resposta2: any;
  resposta3: any;
  resposta4: any;
  resposta5: any;

  pontuacao = 0;
  resposta6: any;
  resposta7: any;
  resposta8: any;
  resposta9: any;
  resposta10: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                
    this.resposta1 = this.navParams.data.resposta1;
    this.resposta2 = this.navParams.data.resposta2;
    this.resposta3 = this.navParams.data.resposta3;
    this.resposta4 = this.navParams.data.resposta4;
    this.resposta5 = this.navParams.data.resposta5;
    this.resposta6 = this.navParams.data.resposta6;
    this.resposta7 = this.navParams.data.resposta7;
    this.resposta8 = this.navParams.data.resposta8;
    this.resposta9 = this.navParams.data.resposta9;
    this.resposta10 = this.navParams.data.resposta10;

  }

  ionViewDidLoad() {
    if (this.resposta1 == "quatro"){
      this.pontuacao++
    };
    if (this.resposta2 == "quatro"){
      this.pontuacao++
    };
    if (this.resposta3 == "um"){
      this.pontuacao++
    };
    if (this.resposta4 == "um"){
      this.pontuacao++
    }; 
    if (this.resposta5 == "tres"){
      this.pontuacao++
    };
    if (this.resposta6 == "um"){
      this.pontuacao++
    };
    if (this.resposta7 == "um"){
      this.pontuacao++
    };
    if (this.resposta8 == "um"){
      this.pontuacao++
    };
    if (this.resposta9 == "dois"){
      this.pontuacao++
    };
    if (this.resposta10 == "dois"){
      this.pontuacao++
    };
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
