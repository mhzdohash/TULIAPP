import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteCasaPage } from './cliente-casa.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteCasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteCasaPageRoutingModule {}
