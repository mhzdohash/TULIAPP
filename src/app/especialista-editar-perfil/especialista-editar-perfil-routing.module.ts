import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistaEditarPerfilPage } from './especialista-editar-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaEditarPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistaEditarPerfilPageRoutingModule {}
