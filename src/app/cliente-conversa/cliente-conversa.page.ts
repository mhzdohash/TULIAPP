import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-clinte-conversa',
  templateUrl: './cliente-conversa.page.html',
  styleUrls: ['./cliente-conversa.page.scss'],
})
export class ClienteConversaPage {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

}
