import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  constructor(private navController: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.navController.navigateForward('/cadastro');
    }, 1000);

}
}



