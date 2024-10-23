import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './especialista-chat.page.html',
  styleUrls: ['./especialista-chat.page.scss'],
})
export class EspecialistaChatPage {
  chats = [
    { name: 'Alice Santos', image: 'assets/imgs/alice.jpg' },
    { name: 'Bruno Pereira', image: 'assets/imgs/bruno.jpg' },
    { name: 'Carlos Souza', image: 'assets/imgs/carlos.jpg' },
    // Adicione mais chats conforme necessário
  ];

  constructor() {}

  openChat(chat: any) {
    // Lógica para abrir o chat específico
    console.log('Abrindo chat com:', chat.name);
    // Redirecionar para a página de chat com detalhes da conversa
  }
}
