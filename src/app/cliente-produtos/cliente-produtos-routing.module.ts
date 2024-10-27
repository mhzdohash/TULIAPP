import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteProdutosPage } from './cliente-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteProdutosPageRoutingModule {}
