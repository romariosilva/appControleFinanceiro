import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nome = 'Romario';

  constructor(public navCtrl: NavController) {
     
  }

  getNome(){
    return "Retornado pelo método tal"+ this.nome;
  }

}
