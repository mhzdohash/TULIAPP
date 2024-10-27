import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteChatPage } from './cliente-chat.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteChatPageRoutingModule {}
