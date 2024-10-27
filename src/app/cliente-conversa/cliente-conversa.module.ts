import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteConversaPageRoutingModule } from './cliente-conversa-routing.module';

import { ClienteConversaPage } from './cliente-conversa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteConversaPageRoutingModule
  ],
  declarations: [ClienteConversaPage]
})
export class ClienteConversaPageModule {}
