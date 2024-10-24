import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialistaService } from '../services/especialista.service';

@Component({
  selector: 'app-especialista-editar-perfil',
  templateUrl: './especialista-editar-perfil.page.html',
  styleUrls: ['./especialista-editar-perfil.page.scss'],
})
export class EspecialistaEditarPerfilPage implements OnInit {

  especialista: any = {
    nome: '',
    descricao: '',
    genero: '',
    procedimentos: []
  };

  constructor(private router: Router, private especialistaService: EspecialistaService) {}

  ngOnInit() {
    this.especialista = this.especialistaService.getPerfil(); // Obtém o perfil atual
  }

  adicionarProcedimento() {
    const novoProcedimento = {
      titulo: 'Novo Procedimento',
      descricao: ''
    };
    this.especialistaService.adicionarProcedimento(novoProcedimento);
  }

  removerProcedimento(index: number) {
    this.especialistaService.removerProcedimento(index);
  }

  salvarAlteracoes() {
    this.especialistaService.salvarAlteracoes(this.especialista);
    this.router.navigate(['/especialista-perfil']); // Volta para a página de perfil
  }
}
