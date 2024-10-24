import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistaEditarPerfilPageRoutingModule } from './especialista-editar-perfil-routing.module';

import { EspecialistaEditarPerfilPage } from './especialista-editar-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistaEditarPerfilPageRoutingModule
  ],
  declarations: [EspecialistaEditarPerfilPage]
})
export class EspecialistaEditarPerfilPageModule {}
