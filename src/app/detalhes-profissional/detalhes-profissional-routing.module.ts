import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesProfissionalPage } from './detalhes-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesProfissionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesProfissionalPageRoutingModule {}
