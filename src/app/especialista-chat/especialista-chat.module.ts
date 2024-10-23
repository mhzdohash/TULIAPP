import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistaChatPageRoutingModule } from './especialista-chat-routing.module';

import { EspecialistaChatPage } from './especialista-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistaChatPageRoutingModule
  ],
  declarations: [EspecialistaChatPage]
})
export class EspecialistaChatPageModule {}
