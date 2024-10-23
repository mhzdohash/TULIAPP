import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistaChatPage } from './especialista-chat.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistaChatPageRoutingModule {}
