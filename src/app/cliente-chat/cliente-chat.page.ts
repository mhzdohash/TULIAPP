import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './cliente-chat.page.html',
  styleUrls: ['./cliente-chat.page.scss'],
})
export class ClienteChatPage {
  chats = [
    { name: 'Dra Amanda Oliveria ', image: './assets/icon/Foto-doutora-Ana-Elisa.jpg' },
    { name: 'Dra Luísa Manetta', image: './assets/icon/doutora2.jpg' },
    { name: 'Dra Clara Souza', image: './assets/icon/doutora3.jpg' },
  ];

  constructor(private router: Router) {}

  abrirChat(pessoa: any) {
    this.router.navigate(['/cliente-conversa'], {
      queryParams: {
        nome: pessoa.nome,
        foto: pessoa.foto
      }
    });
  }
}
