import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteEditarPerfilPage } from './cliente-editar-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteEditarPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteEditarPerfilPageRoutingModule {}
