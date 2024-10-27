import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteChatPageRoutingModule } from './cliente-chat-routing.module';

import { ClienteChatPage } from './cliente-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteChatPageRoutingModule
  ],
  declarations: [ClienteChatPage]
})
export class ClienteChatPageModule {}
