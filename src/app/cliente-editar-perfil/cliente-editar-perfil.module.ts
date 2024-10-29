import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEditarPerfilPageRoutingModule } from './cliente-editar-perfil-routing.module';

import { ClienteEditarPerfilPage } from './cliente-editar-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEditarPerfilPageRoutingModule
  ],
  declarations: [ClienteEditarPerfilPage]
})
export class ClienteEditarPerfilPageModule {}
