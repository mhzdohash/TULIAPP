import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navController: NavController) {}

  ngOnInit() {
    setTimeout(() => {
      this.navController.navigateForward('/pagina-tuli'); // Altere para o nome da sua nova página
    }, 1000); // 3 segundos
  }
}