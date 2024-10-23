import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhe-dia',
  templateUrl: './detalhe-dia.page.html',
  styleUrls: ['./detalhe-dia.page.scss'],
})
export class DetalheDiaPage implements OnInit {
  horarios: string[] = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];
  compromissos: { [key: string]: string } = {}; 
  constructor(private navCtrl: NavController) {}

  ngOnInit() {

    const storedCompromissos = localStorage.getItem('compromissos');
    if (storedCompromissos) {
      this.compromissos = JSON.parse(storedCompromissos);
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  saveCompromissos() {
    console.log('Salvando compromissos:', this.compromissos);
    localStorage.setItem('compromissos', JSON.stringify(this.compromissos));
    alert('Compromissos salvos com sucesso!');
  }
}
