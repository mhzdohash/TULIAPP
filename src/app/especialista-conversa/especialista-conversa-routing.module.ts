import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistaConversaPage } from './especialista-conversa.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaConversaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistaConversaPageRoutingModule {}
