import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientePerfilPage } from './cliente-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ClientePerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePerfilPageRoutingModule {}
