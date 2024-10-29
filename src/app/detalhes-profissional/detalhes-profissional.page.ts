import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-profissional',
  templateUrl: './detalhes-profissional.page.html',
  styleUrls: ['./detalhes-profissional.page.scss'],
})
export class DetalhesProfissionalPage{
  profissionalNome = 'Dra. Maria Alves';
  profissionalDescricao = 'Especialista em dermatologia estética, dedicada a tratamentos personalizados e minimamente invasivos, com foco em resultados naturais que realçam a beleza e promovem bem-estar.';
  profissionalFoto = 'assets/icon/doutor1.jpg';
  estrelas = new Array(5);

  feedbacks = [
    {
      nome: 'Joana Lima',
      data: '13-08-2024',
      estrelas: new Array(5),
      texto: 'Profissional muito dedicada e profissional!',
      foto: 'assets/icon/pessoa1.jpg'
    },
    {
      nome: 'Bruno Silva',
      data: '09-09-2024',
      estrelas: new Array(5),
      texto: 'Ótima profissional, a Dr Maria fez eu mudar minha autoestima de forma muito positiva.',
      foto: 'assets/icon/pessoa2.jpg'
    }
  ];

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}



  goBack() {
    this.navCtrl.back();
  }
}
