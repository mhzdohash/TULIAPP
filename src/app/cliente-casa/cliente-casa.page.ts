import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-casa',
  templateUrl: './cliente-casa.page.html',
  styleUrls: ['./cliente-casa.page.scss'],
})
export class ClienteCasaPage {
  profissionais = [
    { nome: 'Dra. Maria Alves', descricao: 'Especialista em dermatologia estética.', id: 1, foto: 'assets/icon/doutor1.jpg' },
    { nome: 'Dr. Carlos Gonçalves', descricao: 'Focado em bem-estar e naturalidade.', id: 2, foto: 'assets/icon/doutor2.jpg' },
    { nome: 'Dr. Fernando Silva', descricao: 'Experiência em procedimentos minimamente invasivos.', id: 3, foto: 'assets/icon/doutor3.jpg' },
  ];
  estrelas = new Array(5);

  constructor(private navCtrl: NavController) {}

  verDetalhes(profissional: any) {
    this.navCtrl.navigateForward(`/detalhes-profissional/${profissional.id}`);
  }
}
