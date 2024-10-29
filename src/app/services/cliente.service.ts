import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente = {
    nome: 'Alice Santos',
    descricao: 'Amo animais!',
    genero: 'Feminino',
    fotoPerfil: '../assets/icon/Foto-doutora-Ana-Elisa.jpg',
    fotoFundo: './assets/icon/',
  };

  getPerfil() {
    return this.cliente;
  }

  salvarAlteracoes(clienteAtualizado: any) {
    this.cliente = clienteAtualizado;
    console.log('Perfil atualizado:', this.cliente);
  }
}
