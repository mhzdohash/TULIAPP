import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistaCalendarioPage } from './especialista-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaCalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistaCalendarioPageRoutingModule {}
