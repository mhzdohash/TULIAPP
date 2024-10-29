import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-editar-perfil',
  templateUrl: './cliente-editar-perfil.page.html',
  styleUrls: ['./cliente-editar-perfil.page.scss'],
})
export class ClienteEditarPerfilPage implements OnInit {
  cliente: any = {
    nome: '',
    descricao: '',
    genero: '',
    procedimentos: []
  };

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit() {
    this.cliente = this.clienteService.getPerfil();
  }

  salvarAlteracoes() {
    this.clienteService.salvarAlteracoes(this.cliente);
    this.router.navigate(['/cliente-perfil']);
  }
}
