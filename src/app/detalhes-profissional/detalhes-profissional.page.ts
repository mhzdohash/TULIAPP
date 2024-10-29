import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-profissional',
  templateUrl: './detalhes-profissional.page.html',
  styleUrls: ['./detalhes-profissional.page.scss'],
})
export class DetalhesProfissionalPage{
  profissionalNome = 'Dra. Amanda Oliveira';
  profissionalDescricao = 'Especialista em dermatologia estética, dedicada a tratamentos personalizados e minimamente invasivos, com foco em resultados naturais que realçam a beleza e promovem bem-estar.';
  profissionalFoto = 'assets/icon/Foto-doutora-Ana-Elisa.jpg';
  estrelas = new Array(5);

  feedbacks = [
    {
      nome: 'Joana Lima',
      data: '13-08-2024',
      estrelas: new Array(5),
      texto: 'Profissional muito dedicada e atenciosa!',
      foto: 'assets/icon/pessoa1.jpg'
    },
    {
      nome: 'Bruno Silva',
      data: '09-09-2024',
      estrelas: new Array(5),
      texto: 'Ótima profissional, a Dr Amanda fez eu mudar minha autoestima de forma muito positiva.',
      foto: 'assets/icon/pessoa2.jpg'
    }
  ];

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  enviarMensagem() {
    this.navCtrl.navigateForward('/cliente-conversa');
  }


  goBack() {
    this.navCtrl.back();
  }
}
