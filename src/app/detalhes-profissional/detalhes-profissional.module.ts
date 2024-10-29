import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesProfissionalPageRoutingModule } from './detalhes-profissional-routing.module';

import { DetalhesProfissionalPage } from './detalhes-profissional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesProfissionalPageRoutingModule
  ],
  declarations: [DetalhesProfissionalPage]
})
export class DetalhesProfissionalPageModule {}
