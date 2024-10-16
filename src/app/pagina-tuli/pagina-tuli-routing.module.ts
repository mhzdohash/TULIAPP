import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaTuliPage } from './pagina-tuli.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaTuliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaTuliPageRoutingModule {}
