import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-tuli',
  templateUrl: './pagina-tuli.page.html',
  styleUrls: ['./pagina-tuli.page.scss'],
})
export class PaginaTuliPage{

  constructor(private navController: NavController) { }

  goToLogin() {
    this.navController.navigateForward('/login');
  }
  
  goToCadastro() {
    this.navController.navigateForward('/cadastro');
  }

}
