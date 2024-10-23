import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheDiaPage } from './detalhe-dia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheDiaPageRoutingModule {}
