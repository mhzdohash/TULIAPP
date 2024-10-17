import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEspecialistaPageRoutingModule } from './cadastro-especialista-routing.module';

import { CadastroEspecialistaPage } from './cadastro-especialista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEspecialistaPageRoutingModule
  ],
  declarations: [CadastroEspecialistaPage]
})
export class CadastroEspecialistaPageModule {}
