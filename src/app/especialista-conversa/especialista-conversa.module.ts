import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistaConversaPageRoutingModule } from './especialista-conversa-routing.module';

import { EspecialistaConversaPage } from './especialista-conversa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistaConversaPageRoutingModule
  ],
  declarations: [EspecialistaConversaPage]
})
export class EspecialistaConversaPageModule {}
