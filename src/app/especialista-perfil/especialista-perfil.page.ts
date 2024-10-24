import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialistaService } from '../services/especialista.service';

@Component({
  selector: 'app-especialista-perfil',
  templateUrl: './especialista-perfil.page.html',
  styleUrls: ['./especialista-perfil.page.scss'],
})
export class EspecialistaPerfilPage implements OnInit {

  especialista: any;

  constructor(private router: Router, private especialistaService: EspecialistaService) {}

  ngOnInit() {
    this.especialista = this.especialistaService.getPerfil();
  }

  editarPerfil() {
    this.router.navigate(['/especialista-editar-perfil']);
  }
}
