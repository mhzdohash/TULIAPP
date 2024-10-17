import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEspecialistaPage } from './cadastro-especialista.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEspecialistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEspecialistaPageRoutingModule {}
