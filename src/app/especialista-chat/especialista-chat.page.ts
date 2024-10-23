import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './especialista-chat.page.html',
  styleUrls: ['./especialista-chat.page.scss'],
})
export class EspecialistaChatPage {
  chats = [
    { name: 'Alice Santos', image: './assets/icon/pexels-vinicius-wiesehofer-289347-1130626.jpg' },
    { name: 'Bruno Pereira', image: './assets/icon/model-2359322_1280.jpg' },
    { name: 'Carlos Souza', image: './assets/icon/people-6889599_1280.jpg' },
  ];

  constructor(private router: Router) {}

  abrirChat(pessoa: any) {
    this.router.navigate(['/especialista-conversa'], {
      queryParams: {
        nome: pessoa.nome,
        foto: pessoa.foto
      }
    });
  }
}
