import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEspecialistaPage } from './home-especialista.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEspecialistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEspecialistaPageRoutingModule {}
