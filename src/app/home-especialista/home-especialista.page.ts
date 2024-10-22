import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-especialista',
  templateUrl: './home-especialista.page.html',
  styleUrls: ['./home-especialista.page.scss'],
})
export class HomeEspecialistaPage implements OnInit {

  constructor(private navController: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.navController.navigateForward('/cadastro');
    }, 1000);

}
}
