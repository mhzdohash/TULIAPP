import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.page.html',
  styleUrls: ['./cliente-perfil.page.scss'],
})
export class ClientePerfilPage implements OnInit {

  cliente: any;

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit() {
    this.cliente = this.clienteService.getPerfil();
  }

  editarPerfil() {
    this.router.navigate(['/cliente-editar-perfil']);
  }
}
