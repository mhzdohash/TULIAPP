import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistaPerfilPageRoutingModule } from './especialista-perfil-routing.module';

import { EspecialistaPerfilPage } from './especialista-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistaPerfilPageRoutingModule
  ],
  declarations: [EspecialistaPerfilPage]
})
export class EspecialistaPerfilPageModule {}
