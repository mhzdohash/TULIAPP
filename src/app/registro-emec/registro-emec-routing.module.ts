import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroEmecPage } from './registro-emec.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEmecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroEmecPageRoutingModule {}
