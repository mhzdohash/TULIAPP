import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistaPerfilPage } from './especialista-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistaPerfilPageRoutingModule {}
