import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-especialista-conversa',
  templateUrl: './especialista-conversa.page.html',
  styleUrls: ['./especialista-conversa.page.scss'],
})
export class EspecialistaConversaPage {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }

}
