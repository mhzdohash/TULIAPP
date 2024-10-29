import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientePerfilPageRoutingModule } from './cliente-perfil-routing.module';

import { ClientePerfilPage } from './cliente-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientePerfilPageRoutingModule
  ],
  declarations: [ClientePerfilPage]
})
export class ClientePerfilPageModule {}
